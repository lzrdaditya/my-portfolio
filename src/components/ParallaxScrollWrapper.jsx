"use client";

import { useEffect, useState } from 'react';

export default function ParallaxScrollWrapper({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize viewport height
      setViewportHeight(window.innerHeight);
      
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      
      const handleResize = () => {
        setViewportHeight(window.innerHeight);
      };
      
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });
      
      // Initial scroll position
      setScrollY(window.scrollY);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return children({ scrollY, viewportHeight });
}