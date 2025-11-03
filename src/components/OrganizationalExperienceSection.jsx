"use client";

import { useRef } from 'react';

export default function OrganizationalExperienceSection() {
  const scrollContainerRef = useRef(null);
  
  const organizations = [
    {
      role: "Head of External Relations",
      period: "2023 - 2024",
      organization: "Industrial Engineering Student Association",
      description: "Led partnerships & collaborations, managed 15-member team, established 10+ industry connections.",
      img: "/images/project1.jpg", // Add appropriate images
    },
    {
      role: "Project Manager",
      period: "2022 - 2023",
      organization: "Engineering Career Development Program",
      description: "Managed 3 major events, coordinated with 20+ industry professionals, increased participation by 40%.",
      img: "/images/project2.jpg",
    },
    {
      role: "Committee Head",
      period: "2022",
      organization: "Industrial Engineering Competition",
      description: "Led 30-member committee, managed $5000+ budget, hosted 500+ participants from 50+ universities.",
      img: "/images/project3.jpg",
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="org-experience" className="fade-in text-center relative py-16">
      <h2 className="text-3xl font-semibold mb-8">Organizational Experience</h2>
      
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transform -translate-y-1/2"
        aria-label="Scroll left"
      >
        ←
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transform -translate-y-1/2"
        aria-label="Scroll right"
      >
        →
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-4 pb-4 max-w-6xl mx-auto scrollbar-hide snap-x snap-mandatory"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory'
        }}
      >
        {organizations.map((org, i) => (
          <div
            key={i}
            className="flex-none w-[350px] bg-[#1e1e1e] rounded-lg overflow-hidden hover:scale-[1.02] transition snap-center"
          >
            <img
              src={org.img}
              alt={org.organization}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <div className="flex flex-col gap-1 mb-2">
                <h3 className="text-lg font-semibold">{org.role}</h3>
                <span className="text-accent text-sm">{org.period}</span>
              </div>
              <h4 className="text-silver font-medium mb-2">{org.organization}</h4>
              <p className="text-gray-400 text-sm">{org.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}