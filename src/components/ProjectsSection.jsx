"use client";

import { useRef } from 'react';

export default function ProjectsSection() {
  const scrollContainerRef = useRef(null);
  
  const projects = [
    {
      name: "Reliability Calculation Web App",
      desc: "Built a CMMS-integrated web app that improved RCM team efficiency by 700%.",
      img: "/images/project1.jpg",
    },
    {
      name: "Predictive Maintenance with Python",
      desc: "Implemented CatBoost and Deep Learning model on 10,000+ sensor readings, improving accuracy by 30%.",
      img: "/images/project2.jpg",
    },
    {
      name: "Lean Implementation - Wonosalam Coffee",
      desc: "Led Lean project with Toyota, increasing productivity by 10% and quality by 12%.",
      img: "/images/project3.jpg",
    },
    {
      name: "ILOG: Illegal Loging Detection System",
      desc: "Developed real-time digital twin system for manufacturing line monitoring and optimization.",
      img: "/images/project1.jpg", // You can add new project images
    },
    {
      name: "Spare Parts Inventory Planning in Cement Industry",
      desc: "Created simulation tool for equipment reliability prediction and maintenance planning.",
      img: "/images/project2.jpg",
    },
    {
      name: "Closed-House Chicken Coop Monitoring System and Chicken Blood Processing Equipment to Support Chicken Farming Productivity",
      desc: "Built real-time monitoring dashboard integrating IoT sensors and production KPIs.",
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
    <section id="projects" className="fade-in text-center relative">
      <h2 className="text-3xl font-semibold mb-8">Highlighted Projects</h2>
      
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
        {projects.map((proj, i) => (
          <div
            key={i}
            className="flex-none w-[350px] bg-[#1e1e1e] rounded-lg overflow-hidden hover:scale-[1.02] transition snap-center"
          >
            <img
              src={proj.img}
              alt={proj.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-400 text-sm">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
