import { createServer } from 'vite';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(projectRoot, 'exports');
const VIEWPORT = { width: 1440, height: 900 };
const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

async function ensureOutputDir() {
  await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

async function captureSlides() {
  await ensureOutputDir();

  const server = await createServer({
    root: projectRoot,
    server: {
      port: 4179,
      host: '127.0.0.1',
    },
    logLevel: 'error',
  });

  await server.listen();
  const previewUrl = server.resolvedUrls?.local?.[0] ?? 'http://127.0.0.1:4179';

  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: VIEWPORT,
  });

  try {
    const page = await browser.newPage();
    await page.goto(previewUrl, { waitUntil: 'networkidle0' });
    await page.waitForSelector('[data-slide-index]');

    const slideHandles = await page.$$('[data-slide-index]');
    for (let index = 0; index < slideHandles.length; index += 1) {
      const selector = `[data-slide-index="${index}"]`;

      await page.evaluate(
        (sel, width, height) => {
          const slide = document.querySelector(sel);
          if (!slide) return;
          slide.setAttribute('data-capture-active', 'true');
          const container = slide.parentElement;
          if (container) {
            container.style.height = `${height}px`;
            container.style.overflow = 'visible';
          }
          slide.style.transform = 'none';
          slide.style.width = `${width}px`;
          slide.style.height = `${height}px`;
          slide.style.boxShadow = 'none';
        },
        selector,
        SLIDE_WIDTH,
        SLIDE_HEIGHT,
      );

      const slideHandle = await page.$(selector);
      if (slideHandle) {
        const filename = `slide-${String(index + 1).padStart(2, '0')}.png`;
        const filepath = path.join(OUTPUT_DIR, filename);
        await slideHandle.screenshot({
          path: filepath,
          omitBackground: false,
        });
      }

      await page.evaluate((sel) => {
        const slide = document.querySelector(sel);
        if (!slide) return;
        slide.removeAttribute('data-capture-active');
        slide.style.transform = '';
        slide.style.width = '';
        slide.style.height = '';
        slide.style.boxShadow = '';
        const container = slide.parentElement;
        if (container) {
          container.style.height = '';
          container.style.overflow = '';
        }
      }, selector);
    }
  } finally {
    await browser.close();
    await server.close();
  }
}

captureSlides().catch((error) => {
  console.error('[exportSlides] Failed to capture slides:', error);
  process.exitCode = 1;
});
