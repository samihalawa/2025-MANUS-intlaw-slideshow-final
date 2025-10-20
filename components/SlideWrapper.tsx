import React from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className }) => {
  return (
    <section 
      className={`bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden relative transition-all duration-300 hover:shadow-cyan-500/10 hover:border-slate-300 w-full h-full ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      {children}
    </section>
  );
};