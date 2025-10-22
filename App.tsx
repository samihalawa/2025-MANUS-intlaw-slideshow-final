import React from 'react';

// --- Import all slides from the 'slides' directory ---
// Section 1: Introduction
import { Slide01 } from './slides/Slide01';
import { Slide02 } from './slides/Slide02';

// Section 2: Problem & Vision
import { Slide03_Analysis } from './slides/Slide03_Analysis';
import { Slide04 } from './slides/Slide04';

// Section 3: Módulo 1 - Automated Client Intake & Qualification
import { Slide07_B } from './slides/Slide07_B';
import { Slide08_B } from './slides/Slide08_B';
import { Slide09_B } from './slides/Slide09_B';

// Section 4: Módulo 2 - Proactive Lead Generation
import { Slide10_A } from './slides/Slide10_A';
import { Slide10_B } from './slides/Slide10_B';
import { Slide10_D } from './slides/Slide10_D';
import { Slide10_E_Idealista } from './slides/Slide10_E_Idealista';

// Section 5: Módulo 3 - AI Document Agent
import { Slide10 } from './slides/Slide10';
import { Slide11_B } from './slides/Slide11_B';
import { Slide10_C } from './slides/Slide10_C';

// Section 6: Módulo 4 - Connected Document Generation
import { Slide12 } from './slides/Slide12';
import { Slide13_B } from './slides/Slide13_B';

// Section 7: Módulo 5 - Unified Platform
import { Slide14_C } from './slides/Slide14_C';

// Section 8: Benefits & ROI
import { Slide14 } from './slides/Slide14';
import { Slide14_Dashboard } from './slides/Slide14_Dashboard';

// Section 9: Investment & Closing
import { Slide15 } from './slides/Slide15';
import { Slide15_Addons } from './slides/Slide15_Addons';
import { Slide15_SpecialOffer } from './slides/Slide15_SpecialOffer';
import { Slide15_Assurance } from './slides/Slide15_Assurance';
import { Slide16 } from './slides/Slide16';
import { Slide17 } from './slides/Slide17';

// --- MAIN PRESENTATION COMPONENT ---

// Array of slide components from the 'slides' folder, organized for a logical flow
const slides = [
  // Section 1: Introduction
  Slide01,            // 1. Título
  Slide02,            // 2. Agenda
  
  // Section 2: Problem & Vision
  Slide03_Analysis,   // 3. Análisis de Necesidades (Personalizado)
  Slide04,            // 4. Visión y Dashboard de Impacto

  // Section 3: Módulo 1 - Automated Client Intake & Qualification
  Slide07_B,          // 5. Automatización Web (Chatbot)
  Slide08_B,          // 6. Captación Multicanal y Cualificación IA (WhatsApp -> Lead)
  Slide09_B,          // 7. Dashboard de Oportunidades (Lead in Dashboard)

  // Section 4: Módulo 2 - Proactive Lead Generation
  Slide10_A,          // 8. Introducción a la Captación Proactiva IA
  Slide10_B,          // 9. Radar de Oportunidades Proactivas
  Slide10_D,          // 10. Flujo de Campaña de Captación IA
  Slide10_E_Idealista,// 11. Caso de Uso: Prospección en Real Estate
  
  // Section 5: Módulo 3 - AI Document Agent
  Slide10,            // 12. Introducción al Agente de Documentos (Garantía 0% Alucinaciones)
  Slide11_B,          // 13. Demostración: Agente con Citas
  Slide10_C,          // 14. Demostración: Inteligencia Documental (Mapa de Entidades)

  // Section 6: Módulo 4 - Connected Document Generation
  Slide12,            // 15. Introducción a la Generación de Documentos (Copilot)
  Slide13_B,          // 16. Demostración: Generación Conectada a CRM
  
  // Section 7: Módulo 5 - Unified Platform
  Slide14_C,          // 17. Plataforma Unificada: Vista del Caso 360°

  // Section 8: Benefits & ROI
  Slide14,            // 18. Resumen de Beneficios Clave
  Slide14_Dashboard,  // 19. Dashboard de ROI y Proyección P&L
  
  // Section 9: Investment & Closing
  Slide15,            // 20. Modelo de Inversión
  Slide15_Addons,     // 21. Módulos Adicionales
  Slide15_SpecialOffer, // 22. Oferta Especial por Tiempo Limitado
  Slide15_Assurance,  // 23. Garantías y Compromiso de Riesgo Cero
  Slide16,            // 24. Próximos Pasos
  Slide17             // 25. Cierre y Agradecimiento
];

export default function App() {
  return (
    <div className="w-full bg-white font-sans text-base flex flex-col items-center py-12 px-8">
      <main className="w-full max-w-7xl space-y-24">
        {slides.map((SlideComponent, index) => (
          <SlideComponent key={index} />
        ))}
      </main>
    </div>
  );
}