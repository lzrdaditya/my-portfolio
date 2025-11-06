"use client";

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        setIsMounted(false);
      };
    }
  }, []);

  const maxScroll = 1500;
  const scrollProgress = Math.min(1, scrollPosition / maxScroll);
  const translateY = scrollPosition * 0.15;
  const blur = Math.min(8, scrollProgress * 8);

  return (
    <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/bg-abstract.jpg')",
          transform: `translateY(${translateY}px)`,
        }}
      />
      
      {/* Initial Dark Overlay - reduced opacity */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(17, 17, 17, 0.18)',
        }}
      />
      {/* Blur and Fade Overlay - reduced opacity */}
      <div
        className="absolute inset-0 transition-all duration-100"
        style={{
          backdropFilter: `blur(${blur}px)`,
          opacity: scrollProgress * 0.25,
          background: 'rgba(17, 17, 17, 0.15)',
        }}
      />
      {/* Dark Gradient Overlay - reduced opacity */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]/70"
        style={{
          opacity: scrollProgress * 0.4 + 0.1,
        }}
      />
    </div>
  );
}