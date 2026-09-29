import React from 'react';

interface FaveoLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const FaveoLogo: React.FC<FaveoLogoProps> = ({ className = 'h-9 w-auto', variant = 'light' }) => {
  const brandColor = variant === 'dark' ? '#38bdf8' : '#00a6f4';
  const textColor = variant === 'dark' ? '#ffffff' : '#00a6f4';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg 
        viewBox="0 0 240 70" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Faveo Logo"
      >
        {/* FAVEO Letters */}
        <text
          x="120"
          y="42"
          textAnchor="middle"
          fill={brandColor}
          fontSize="48"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          letterSpacing="9"
        >
          FAVEO
        </text>

        {/* Horizontal Line with Center Cross Intersection */}
        {/* Left Horizontal Segment */}
        <line x1="8" y1="56" x2="110" y2="56" stroke={brandColor} strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Center Cross '+' Marker */}
        <line x1="120" y1="46" x2="120" y2="66" stroke={brandColor} strokeWidth="4" strokeLinecap="round" />
        
        {/* Right Horizontal Segment */}
        <line x1="130" y1="56" x2="232" y2="56" stroke={brandColor} strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
