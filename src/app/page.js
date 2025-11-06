"use client";

import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import OrganizationalExperienceSection from "../components/OrganizationalExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";


export default function Page() {
  // Scroll fade-in animation
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

  return (
    <main className="bg-[#0f0f0f] text-gray-200 font-sans overflow-x-hidden">
      <section className="fade-in">
        <HeroSection />
      </section>

      <section className="fade-in">
        <SkillsSection />
      </section>

      <section className="fade-in">
        <ExperienceSection />
      </section>

      <section className="fade-in">
        <ProjectsSection />
      </section>

      <section className="fade-in">
        <OrganizationalExperienceSection />
      </section>

      <section className="fade-in">
        <EducationSection />
      </section>

      <section className="fade-in">
        <ContactSection />
      </section>
    </main>
  );
}
