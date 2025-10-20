import React from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className }) => {
  return (
    <section 
      className={`bg-white rounded-2xl shadow-2xl shadow-black/30 relative transition-all duration-300 w-full h-full ring-0 hover:ring-4 ring-[#4a9eff]/50 ${className}`}
    >
      {children}
    </section>
  );
};