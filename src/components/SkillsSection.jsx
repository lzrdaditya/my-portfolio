import { FaTools, FaIndustry, FaChartLine, FaPython } from 'react-icons/fa';
import { GiProcessor } from 'react-icons/gi';
import { MdGroups } from 'react-icons/md';
import { SiSiemens } from 'react-icons/si';
import { BsGraphUp } from 'react-icons/bs';
import { AiOutlineAudit } from 'react-icons/ai';

export default function SkillsSection() {
  const skills = [
    {
      name: "Reliability Engineering",
      icon: FaTools,
      description: "Expertise in RCM, FMEA, and reliability analysis"
    },
    {
      name: "Lean Manufacturing",
      icon: FaIndustry,
      description: "Implementation of lean principles and waste reduction"
    },
    {
      name: "Six Sigma",
      icon: BsGraphUp,
      description: "Process improvement and quality management"
    },
    {
      name: "Data Analysis",
      icon: FaPython,
      description: "Python, Excel, and statistical analysis"
    },
    {
      name: "Predictive Maintenance",
      icon: GiProcessor,
      description: "Condition monitoring and failure prediction"
    },
    {
      name: "Monte Carlo Simulation",
      icon: AiOutlineAudit,
      description: "Risk analysis and decision modeling"
    },
    {
      name: "Digital Twin",
      icon: SiSiemens,
      description: "Virtual modeling and system optimization"
    },
    {
      name: "Team Leadership",
      icon: MdGroups,
      description: "Project management and team coordination"
    }
  ];

  return (
    <section id="skills" className="fade-in text-center py-16">
      <h2 className="text-3xl font-semibold mb-8">Core Competencies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#1e1e1e] rounded-lg p-6 text-silver hover:text-white hover:bg-[#2a2a2a] transition-all transform hover:-translate-y-1 hover:shadow-xl group"
          >
            <div className="flex flex-col items-center">
              <skill.icon className="w-12 h-12 mb-4 text-[#4fc3f7] group-hover:text-white transition-colors" />
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}