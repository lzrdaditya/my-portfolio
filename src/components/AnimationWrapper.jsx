"use client";

import { useEffect } from 'react';

export default function AnimationWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fadeEls = document.querySelectorAll(".fade-in");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      });

      fadeEls.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, []);

  return <>{children}</>;
}