"use client";

import { useState } from 'react';
import ClientPortal from './ClientPortal';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Reliability Engineer (Consultant)',
      period: 'May 2025 - Nov 2025',
      company: 'PT. Badak LNG',
      bullets: [
        'Lead a RCM team (5+ member) supervised by Qatar reliability expert to develop and implement Reliability Centered Maintenance II (RCM II) frameworks.',
        'Analyzed over 1000+ equipment across 5 process plants, 3 utilities plant, and 2 storage & loading area to proposed maintenance strategies based on RCM HSEO Logic and enhance systems asset reliability.',
        'Potentially reduces 6.54% of corrective maintenance cost for each equipment'
      ],
      images: ['/images/project1.jpg', '/images/project2.jpg', '/images/as.jpg']
    },
    {
      title: 'Operation Management Division Intern',
      period: 'Aug 2024 - Feb 2025',
      company: 'PT. Toyota Motor Manufacturing Indonesia',
      bullets: [
        'Designed the digital twin framework to support core Toyota Production System (TPS) principles, enhancing real-time data flow for Just-in-Time (JIT) inventory management and enabling proactive quality control (Jidoka).',
        'Improved production efficiency by 15% through process optimization',
        'Researched and applied ISO 23247 guidelines for Digital Twin implementation, ensuring adherence to standards for integrated-digital monitoring systems for 3 product assembly line across 6 company. Projected to increase efficiency by 6.01% and reduce downtime by 87.56%, creating a significant competitive advantage through enhanced manufacturing operations.'
      ],
      images: ['/images/tmmin1.jpg', '/images/project3.jpg']
    },
    {
      title: 'Reliability Department Intern',
      period: 'Jan 2024 - Feb 2024',
      company: 'PT. Petrokimia Gresik',
      bullets: [
        'A Enhanced Reliability Maintenance Planning by developing predictive maintenance estimation models and optimized maintenance interval strategies using Monte Carlo simulation methods. This approach was applicable to over 300 pieces of critical equipment, directly supporting the company\'s transition to a predictive maintenance.'
      ],
      images: ['/images/project3.jpg']
    }
  ];

  const [imageModal, setImageModal] = useState({ open: false, images: [], index: 0 });

  const openImageModal = (images, idx) => {
    setImageModal({ open: true, images, index: idx });
  };

  const closeImageModal = () => setImageModal({ open: false, images: [], index: 0 });

  const prevImage = () => {
    setImageModal((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
  };

  const nextImage = () => {
    setImageModal((s) => ({ ...s, index: (s.index + 1) % s.images.length }));
  };

  return (
    <section id="experience" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-graphite p-6 rounded-lg">
            {/* Thumbnails for documentation photos (click to enlarge) */}
            {exp.images && exp.images.length > 0 && (
              <div className="flex gap-2 justify-start items-center mb-3">
                {exp.images.slice(0, 3).map((img, i) => (
                  <button key={i} onClick={() => openImageModal(exp.images, i)} className="focus:outline-none">
                    <img src={img} alt={`${exp.company} doc ${i+1}`} className="w-20 h-14 object-cover rounded border" draggable="false" />
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <span className="text-accent">{exp.period}</span>
            </div>
            <h4 className="text-silver mb-4">{exp.company}</h4>
            <ul className="list-disc list-inside text-silver space-y-2">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Image Modal */}
        {imageModal.open && typeof window !== 'undefined' && createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative max-w-4xl w-full bg-[#232b3e] rounded-lg p-4 shadow-2xl">
              <button onClick={closeImageModal} className="absolute top-3 right-3 text-3xl text-gray-300 hover:text-white">×</button>
              <div className="flex items-center justify-center">
                <button onClick={prevImage} className="text-2xl text-gray-300 px-3" aria-label="Previous">‹</button>
                <img src={imageModal.images[imageModal.index]} alt={`image ${imageModal.index+1}`} className="max-h-[60vh] object-contain rounded" />
                <button onClick={nextImage} className="text-2xl text-gray-300 px-3" aria-label="Next">›</button>
              </div>
              <div className="text-center text-sm text-gray-400 mt-2">{imageModal.index + 1} / {imageModal.images.length}</div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
