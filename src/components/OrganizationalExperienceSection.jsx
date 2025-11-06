"use client";

import { useRef, useState } from 'react';
import ClientPortal from './ClientPortal';

export default function OrganizationalExperienceSection() {
  const scrollContainerRef = useRef(null);
  
  const organizations = [
    {
      role: "Assistant's Coordinator",
      period: "2023 - 2025",
      organization: "Manufacturing System Laboratory, ITS",
      description: "One of the Industrial Engineering Laboratory that focused on manufacturing systems, maintenance and reliability, sustainability, and quality",
      img: "/images/project1.jpg",
      images: ["/images/project1.jpg", "/images/as.jpg"],
      details: [
        "Coordinated 19 teaching assistants to deliver laboratory activities for 350+ students, achieving 97.8% KPI completion.",
        "Managed 5 practicums, 5 tests, and 1 major project, ensuring timely execution and high-quality standards.",
        "Improved operational efficiency by implementing structured workflows, resulting in a student satisfaction rating of 4.7/5.",
        "Successfully collaborated with lecturers and academic staff during ASIIN accreditation laboratory assessment."
      ]
    },
    {
      role: "Head of Purwakarta Regional Event",
      period: "2022 - 2023",
      organization: "Ini Lho ITS!!",
      description: "Ini Lho ITS 2024 is an event focused on promoting ITS to high school students across Indonesia.",
      img: "/images/project2.jpg",
      images: ["/images/project2.jpg"],
      details: [
        "Led and supervised a 15-member team to organize a regional outreach event, ensuring 100% completion of all deliverables.",
        "Successfully coordinated visits to 12 high schools, reaching 300+ students to promote ITS programs and opportunities.",
        "Managed event logistics, scheduling, and stakeholder communication to maintain smooth operations under tight timelines.",
        "Achieved a perfect 5/5 student satisfaction rating for the event.",
        "Built partnerships with local institutions to strengthen engagement and maximize outreach impact."
      ]
    },
    {
      role: "Vice President of Finance & Administration",
      period: "2022 - 2023",
      organization: "Industrial Engineering Competition",
      description: "Student Research Kernel is a for-profit organization that conducts research and provides services to help curate and prepare journals for publication.",
      img: "/images/project3.jpg",
      images: ["/images/project3.jpg","/images/test.jpg","/images/test.jpg"],
      details: [
        "Prepared and audited financial statements for investors, ensuring accuracy, transparency, and compliance with reporting standards.",
        "Managed budgeting and expense tracking for multiple research initiatives, optimizing resource allocation and reducing unnecessary costs.",
        "Co-founded and supported research-focused organizations, contributing to the growth and development of the academic research ecosystem."
      ]
    },
    {
      role: "Staff of First Commission (Core Management)",
      period: "2022 - 2023",
      organization: "ITS Legislative Council",
      description: "The ITS Legislative Council is the official legislative body of ITS, acting as the representative voice of KM ITS.",
      img: "/images/project3.jpg",
      images: ["/images/project3.jpg","/images/test.jpg","/images/test.jpg"],
      details: [
        "Supervised and evaluated the performance of the ITS Student Executive Board (2022–2023 cabinet), ensuring compliance with organizational standards and governance.",
        "Compiled GBHK (Garis Besar Haluan Kerja) for the 2023–2024 cabinet, providing a structured roadmap for executive operations and strategic initiatives.",
        "Participated in legislative drafting through the PROLEGITS program, contributing to the development and refinement of student governance laws and policies.",
        "Collaborated with cross-functional teams to maintain transparency and accountability in student government operations."
      ]
    }
  ];
  const [selectedOrg, setSelectedOrg] = useState(null);

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
            className="flex-none w-[350px] bg-[#1e1e1e] rounded-lg overflow-hidden hover:scale-[1.02] transition snap-center relative"
          >
            {/* Thumbnails row (up to 3 images) */}
            {org.images && org.images.length > 0 && (
              <div className="flex gap-1 justify-center items-center pt-3 pb-1 px-2">
                {org.images.slice(0, 3).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={org.organization + ' thumbnail ' + (idx+1)}
                    className="w-14 h-10 object-cover rounded border shadow-sm"
                    draggable="false"
                  />
                ))}
              </div>
            )}
            <img
              src={org.img}
              alt={org.organization}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-left">
              <div className="flex flex-col gap-1 mb-2">
                <h3 className="text-lg font-semibold">{org.role}</h3>
                <span className="text-accent text-sm">{org.period}</span>
              </div>
              <h4 className="text-silver font-medium mb-2">{org.organization}</h4>
              <p className="text-gray-400 text-sm">{org.description}</p>
              <button
                className="mt-3 px-3 py-1 bg-[#4fc3f7] text-[#232b3e] rounded hover:bg-[#1976d2] hover:text-white transition text-sm"
                onClick={() => setSelectedOrg(org)}
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      {/* Modal Popup for More Details */}
      {selectedOrg && (
        <ClientPortal>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" style={{animation: 'fadeInBg 0.2s'}}>
            <div 
              className="bg-[#232b3e] rounded-xl p-8 max-w-3xl w-full relative shadow-2xl animate-popup-open"
              style={{animation: 'popupOpen 0.25s cubic-bezier(0.4,0,0.2,1)'}}
            >
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl"
              onClick={() => setSelectedOrg(null)}
              aria-label="Close details"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-2 text-[#4fc3f7] text-center">{selectedOrg.role}</h3>
            <div className="text-center mb-2">
              <span className="text-accent text-base">{selectedOrg.period}</span>
              <h4 className="text-silver font-semibold mb-2">{selectedOrg.organization}</h4>
            </div>
            <div 
              className="flex gap-3 mb-4 overflow-x-auto px-1 py-2 border-b border-gray-700 scrollbar-thin scrollbar-thumb-[#4fc3f7]/60 scrollbar-track-[#232b3e]"
              style={{scrollbarWidth: 'thin'}}
            >
              {selectedOrg.images && selectedOrg.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={selectedOrg.organization + ' image ' + (idx+1)}
                  className="w-44 h-32 object-cover rounded border shadow"
                  draggable="false"
                />
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-200 mb-2 text-lg pl-4">
              {selectedOrg.details && selectedOrg.details.map((item, idx) => (
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