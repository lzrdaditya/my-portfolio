export default function SkillsSection() {
  const skills = [
    "Reliability Engineering",
    "Lean Manufacturing",
    "Six Sigma",
    "Data Analysis (Python, Excel)",
    "Predictive Maintenance",
    "Monte Carlo Simulation",
    "Digital Twin Implementation",
    "Team Leadership",
  ];

  return (
    <section id="skills" className="fade-in text-center">
      <h2 className="text-3xl font-semibold mb-8">Core Competencies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#1e1e1e] rounded-lg py-4 px-2 text-silver hover:text-white hover:bg-[#2a2a2a] transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
