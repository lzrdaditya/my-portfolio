export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-graphite p-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold">Reliability Engineer (Consultant)</h3>
            <span className="text-accent">May 2025 - Nov 2025</span>
          </div>
          <h4 className="text-silver mb-4">PT. Badak LNG</h4>
          <ul className="list-disc list-inside text-silver space-y-2">
            <li>Implemented predictive maintenance strategies resulting in 25% reduction in equipment downtime</li>
            <li>Developed and maintained reliability metrics dashboards for real-time performance monitoring</li>
            <li>Led cross-functional teams in root cause analysis investigations</li>
          </ul>
        </div>

        <div className="bg-graphite p-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold">Operation Management Division Intern</h3>
            <span className="text-accent">Jun 2023 - Dec 2023</span>
          </div>
          <h4 className="text-silver mb-4">PT. Toyota Motor Manufacturing Indonesia</h4>
          <ul className="list-disc list-inside text-silver space-y-2">
            <li>Supervised production operations and coordinated with maintenance teams</li>
            <li>Improved production efficiency by 15% through process optimization</li>
            <li>Managed a team of 10 operators and technicians</li>
          </ul>
        </div>

        <div className="bg-graphite p-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold">Reliability Department Intern</h3>
            <span className="text-accent">Jan 2024 - Feb 2024</span>
          </div>
          <h4 className="text-silver mb-4">PT. Petrokimia Gresik</h4>
          <ul className="list-disc list-inside text-silver space-y-2">
            <li>A Enhanced Reliability Maintenance Planning by developing predictive maintenance estimation models and optimized maintenance interval strategies using Monte Carlo simulation methods. This approach was applicable to over 300 pieces of critical equipment, directly supporting the company's transition to a predictive maintenance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
