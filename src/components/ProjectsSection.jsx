"use client";

import { useRef, useState } from 'react';
import ClientPortal from './ClientPortal';

export default function ProjectsSection() {
  const scrollContainerRef = useRef(null);
  
  const projects = [
    {
      name: "Reliability Calculation Web App",
      desc: "Developed a web-based solution to automate reliability calculations, transforming manual processes into a fast, data-driven workflow.",
      img: "/images/reliability1.jpg",
      images: ["/images/reliability1.jpg", "/images/reliability2.png", "/images/reliability3.png","/images/reliability4.png","/images/reliability5.png"],
      details: [
        "Developed a web-based tool leveraging CMMS failure data to automate maintenance interval calculations for critical equipment.",
        "Increased team productivity by 700% (Badak LNG Experience) by eliminating manual calculations and streamlining reliability analysis workflows.",
        "Improved accuracy of maintenance data logs, enabling better decision-making for preventive and predictive maintenance strategies.",
        "Designed an intuitive user interface for engineers to input failure data and instantly generate optimized maintenance schedules.",
        "Applied data-driven algorithms to calculate KPIs such as MTBF (Mean Time Between Failures) and downtime, supporting cost-saving initiatives."
      ]
    },
    {
      name: "Lean Implementation - Wonosalam Coffee SMEs",
      desc: "Collaboration with Toyota to apply Lean principles and optimize coffee production processes, driving measurable improvements in productivity and quality.",
      img: "/images/project3.jpg",
      images: ["/images/project3.jpg"],
      details: [
        "Applied Lean Manufacturing principles and continuous improvement strategies to optimize coffee production workflows.",
        "Developed a karakuri tool that help bean sorting activity improving working ergonomics using RULA & REBA methods.",
        "Implemented DMAIC framework to identify inefficiencies, streamline processes, and enhance product quality.",
        "Achieved a 10% increase in productivity and a 12% improvement in product quality, strengthening operational performance.",
        "Introduced 5S workplace organization to improve layout efficiency and reduce waste in daily operations.",
        "Collaborated with local stakeholders and PT Toyota to integrate Lean practices into small-scale agricultural operations."
      ]
    },
    {
      name: "Spare Parts Inventory Planning in Cement Industry",
      desc: "Designed a data-driven inventory strategy to minimize dead stock and optimize maintenance costs for a major cement industry.",
      img: "/images/project2.jpg",
      images: ["/images/project2.jpg"],
      details: [
        "Conducted data collection, cleaning, and preprocessing on historical maintenance and inventory records to ensure accuracy for analysis.",
        "Applied Beta distribution modeling to analyze failure patterns and predict spare part demand.",
        "Performed statistical analysis and cost modeling to identify optimal inventory levels, reducing excess stock and improving cash flow.",
        "Developed data-driven insights to balance corrective and preventive maintenance strategies, supporting long-term reliability goals.",
        "Delivered actionable recommendations through visualized reports and dashboards, enabling informed decision-making for maintenance planning."
      ]
    },
    {
      name: "Predictive Maintenance with Python",
      desc: "Implemented machine learning models to predict equipment failures, enabling proactive maintenance and reducing downtime.",
      img: "/images/project2.jpg",
      images: ["/images/project2.jpg"],
      details: [
        "Built a CatBoost classification model and integrated Deep Learning (MLP) techniques to predict five types of machine failures using operational sensor data.",
        "Processed and analyzed a dataset of 10,000+ machine sensor readings, ensuring data quality through cleaning and feature engineering.",
        "Achieved 60% prediction accuracy, representing a 30% improvement over baseline methods, enabling proactive maintenance planning.",
        "Implemented data visualization and performance metrics (confusion matrix, ROC curve) to validate model reliability and optimize predictive performance.",
        "Delivered a scalable solution for predictive maintenance, reducing unexpected downtime and supporting cost-saving strategies."
      ]
    },
    {
      name: "Image Processing for Vehicle Counting using YOLOv5",
      desc: "Built an object detection pipeline using YOLOv5 to accurately count vehicles and support smarter traffic management.",
      img: "/images/project1.jpg",
      images: ["/images/project1.jpg"],
      details: [
        "Built an object detection pipeline using YOLOv5 to detect and count vehicles from roadway footage.",
        "Led data collection, cleaning, and annotation (e.g., bounding boxes for cars, trucks, bikes) to create a high-quality training dataset.",
        "Performed data preprocessing and augmentation (resize, normalization, mosaic/mixup) to improve model robustness under varying lighting and traffic conditions.",
        "Fine-tuned YOLOv5 on the curated dataset; evaluated performance with mAP, precision/recall, and F1-score to ensure reliable counting accuracy.",
        "Implemented post-processing logic (non-maximum suppression, class filtering) and tracking heuristics to reduce double-counting across frames.",
        "Delivered visualized outputs (annotated frames and dashboards) to present detection results, class breakdowns, and time-based traffic trends."
      ]
    },
    {
      name: "ILOG: Illegal Logging Detection System",
      desc: "Created an intelligent detection system using RNN and IoT sensors to combat illegal logging through real-time monitoring.",
      img: "/images/project1.jpg",
      images: ["/images/project1.jpg"],
      details: [
        "Led a team of 5+ members to design and develop a device for detecting illegal logging activities in forest areas.",
        "Implemented Recurrent Neural Network (RNN) algorithms to process sensor data and identify patterns indicative of unauthorized logging.",
        "Focused on data acquisition and preprocessing, ensuring accurate input for machine learning models.",
        "Integrated real-time monitoring capabilities using IoT sensors to capture environmental changes and trigger alerts."
      ]
    },
    {
      name: "Closed-House Chicken Coop Monitoring System and Chicken Blood Processing Equipment to Support Chicken Farming Productivity",
      desc: "Engineered an IoT-based monitoring system to track air quality in poultry farms, ensuring livestock health and productivity.",
      img: "/images/project3.jpg",
      images: ["/images/project3.jpg"],
      details: [
        "Designed and developed an Arduino-based microcontroller system to monitor air quality in closed-house chicken coops.",
        "Integrated real-time sensors to measure critical parameters such as Nitrogen (N₂), Carbon Monoxide (CO), and Ammonia (NH₃) for livestock health.",
        "Focused on data acquisition, preprocessing, and calibration to ensure accurate sensor readings under varying environmental conditions.",
        "Implemented threshold-based alert mechanisms to notify operators of hazardous gas levels, improving animal welfare and productivity.",
        "Delivered a prototype system with visual dashboards, enabling farmers to track air quality trends and optimize ventilation strategies."
      ]
    }
  ];
  const [selectedProj, setSelectedProj] = useState(null);

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
            className="flex-none w-[350px] bg-[#1e1e1e] rounded-lg overflow-hidden hover:scale-[1.02] transition snap-center relative"
          >
            {/* Thumbnails row (up to 3 images) */}
            {proj.images && proj.images.length > 0 && (
              <div className="flex gap-1 justify-center items-center pt-3 pb-1 px-2">
                {proj.images.slice(0, 3).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={proj.name + ' thumbnail ' + (idx+1)}
                    className="w-14 h-10 object-cover rounded border shadow-sm"
                    draggable="false"
                  />
                ))}
              </div>
            )}
            <img
              src={proj.img}
              alt={proj.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-400 text-sm">{proj.desc}</p>
              <button
                className="mt-3 px-3 py-1 bg-[#4fc3f7] text-[#232b3e] rounded hover:bg-[#1976d2] hover:text-white transition text-sm"
                onClick={() => setSelectedProj(proj)}
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      {/* Modal Popup for More Details */}
      {selectedProj && (
        <ClientPortal>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" style={{animation: 'fadeInBg 0.2s'}}>
            <div className="bg-[#232b3e] rounded-xl p-8 max-w-3xl w-full relative shadow-2xl animate-popup-open"
              style={{animation: 'popupOpen 0.25s cubic-bezier(0.4,0,0.2,1)'}}
            >
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl"
              onClick={() => setSelectedProj(null)}
              aria-label="Close details"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-2 text-[#4fc3f7] text-center">{selectedProj.name}</h3>
            <div className="text-center mb-2">
              <h4 className="text-silver font-semibold mb-2">{selectedProj.desc}</h4>
              {selectedProj.name === "Reliability Calculation Web App" && (
                <a
                  href="https://lzrdaditya.pythonanywhere.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  Try it Live →
                </a>
              )}
            </div>
            <div 
              className="flex gap-3 mb-4 overflow-x-auto px-1 py-2 border-b border-gray-700 scrollbar-thin scrollbar-thumb-[#4fc3f7]/60 scrollbar-track-[#232b3e]"
              style={{scrollbarWidth: 'thin'}}
            >
              {selectedProj.images && selectedProj.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={selectedProj.name + ' image ' + (idx+1)}
                  className="w-44 h-32 object-cover rounded border shadow"
                  draggable="false"
                />
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-200 mb-2 text-lg pl-4">
              {selectedProj.details && selectedProj.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <style jsx global>{`
              @keyframes popupOpen {
                0% { opacity: 0; transform: scale(0.85); }
                100% { opacity: 1; transform: scale(1); }
              }
              @keyframes fadeInBg {
                0% { opacity: 0; }
                100% { opacity: 1; }
              }
              .scrollbar-thin::-webkit-scrollbar {
                height: 8px;
              }
              .scrollbar-thin::-webkit-scrollbar-thumb {
                background: #4fc3f799;
                border-radius: 4px;
              }
              .scrollbar-thin::-webkit-scrollbar-track {
                background: #232b3e;
              }
            `}</style>
            </div>
          </div>
        </ClientPortal>
      )}
      </div>
    </section>
  );
}
