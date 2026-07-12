'use client';

import React from 'react';
import Image from 'next/image';

const SHADOW_MAP: Record<'blue' | 'teal', string> = {
  blue: '#3b82f6',
  teal: '#14b8a6',
};

function resolveShadow(color: 'blue' | 'teal' | string): string {
  return SHADOW_MAP[color as 'blue' | 'teal'] ?? color;
}

interface ProductButtonProps {
  src: string;
  alt: string;
  shadowColor: 'blue' | 'teal' | string;
  borderColor: string;
  onClick: () => void;
}

export function ProductButton({
  src,
  alt,
  shadowColor,
  borderColor,
  onClick,
}: ProductButtonProps) {
  const shadow = resolveShadow(shadowColor);

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-[72px] rounded-full overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{ boxShadow: `0 4px 14px ${shadow}50` }}
    >
      <div
        className="w-full h-full rounded-full relative"
        style={{
          background: `linear-gradient(to right, ${borderColor}20, ${borderColor}60)`,
          border: `2px solid ${borderColor}`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-4"
        />
      </div>
    </button>
  );
}