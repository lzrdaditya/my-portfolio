import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import AnimationWrapper from "../components/AnimationWrapper";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import OrganizationalExperienceSection from "../components/OrganizationalExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";

export default function Page() {
  return (
    <AnimationWrapper>
      <main className="bg-[#0f0f0f] text-gray-200 font-sans overflow-x-hidden relative z-0">
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
    </AnimationWrapper>
  );
}
