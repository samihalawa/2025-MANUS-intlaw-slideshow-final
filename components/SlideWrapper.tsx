import React from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className }) => {
  return (
    <section 
      className={`overflow-hidden relative transition-all duration-300 w-full ${className}`}
    >
      {children}
    </section>
  );
};