"use client";

import React from "react";

export default function EducationSection() {
  const [showMore, setShowMore] = React.useState(false);
  const courses = [
    { name: "Lean Concept & It's Application", total: 3, obtained: "A" },
    { name: "Final Project", total: 6, obtained: "A" },
    { name: "Industrial Planning", total: 3, obtained: "A" },
    { name: "Productivity Engineering", total: 3, obtained: "AB" },
    { name: "Supply Chain Management", total: 3, obtained: "AB" },
    { name: "Industrial Automation", total: 3, obtained: "AB" },
    { name: "Ergonomics", total: 3, obtained: "AB" },
    { name: "Introduction to Economics", total: 3, obtained: "B" },
    { name: "Cost Analysis and Estimation", total: 3, obtained: "B" },
    { name: "Manufacturing Process", total: 3, obtained: "B" },
    { name: "Engineering Statistics 1", total: 3, obtained: "B" },
    { name: "Engineering Statistics 2", total: 3, obtained: "B" },
    { name: "Engineering Statistics 3", total: 3, obtained: "B" },
    { name: "Engineering Drawing", total: 3, obtained: "B" },
    { name: "Engineering Material", total: 3, obtained: "AB" },
    { name: "Operations Research 1", total: 3, obtained: "AB" },
    { name: "Operations Research 2", total: 3, obtained: "AB" },
    { name: "Algorithm and Computer Programming", total: 3, obtained: "AB" },
    { name: "Method Engineering and Work Measurement", total: 3, obtained: "AB" },
    { name: "Manufacturing System", total: 3, obtained: "B" },
    { name: "Engineering Economics", total: 3, obtained: "BC" },
    { name: "Product Design and Development", total: 3, obtained: "AB" },
    { name: "Production Planning and Inventory Control", total: 3, obtained: "B" },
    { name: "Business Information System Design", total: 3, obtained: "B" },
    { name: "Quality Control and Assurance", total: 3, obtained: "AB" },
    { name: "Maintenance and Reliability Engineering", total: 2, obtained: "B" },
    { name: "Organization and Human Resource Management", total: 3, obtained: "AB" },
    { name: "Logistics Systems", total: 3, obtained: "B" },
    { name: "Project Management", total: 2, obtained: "AB" },
    { name: "Facility Design", total: 3, obtained: "AB" },
    { name: "Industrial Systems Simulation", total: 3, obtained: "AB" },
    { name: "Six Sigma", total: 3, obtained: "AB" },
    { name: "Internship I", total: 3, obtained: "A" },
    { name: "Internship II", total: 3, obtained: "A" },
    { name: "Data Analytics", total: 2, obtained: "B" },
    { name: "Systems Modelling", total: 3, obtained: "B" },
    { name: "Practical Work", total: 2, obtained: "A" },
    { name: "Financial Management", total: 3, obtained: "B" },
    { name: "Applied Technology and Digital Transformation", total: 3, obtained: "A" },
    { name: "Sustainable Industrial System", total: 2, obtained: "B" },
    { name: "Technopreneurship", total: 3, obtained: "AB" },
    { name: "Professional Development", total: 3, obtained: "AB" },
    { name: "Softskill Development", total: 3, obtained: "AB" },
    { name: "Reliable Communication and Team Work", total: 3, obtained: "AB" }
  ];
  const visibleCourses = showMore ? courses : courses.slice(0, 3);
  return (
    <section id="education" className="fade-in text-center">
      <h2 className="text-3xl font-semibold mb-8">Education</h2>
      <div className="max-w-3xl mx-auto bg-[#232b3e] p-8 rounded-lg text-left shadow-lg">
        <div className="flex items-center mb-2">
          <img src="/images/its-logo.png" alt="ITS Logo" className="h-10 mr-3" />
          <span className="text-2xl font-bold text-[#f5b041]">ITS</span>
        </div>
        <h3 className="text-lg font-semibold text-[#4fc3f7]">Sepuluh Nopember Institute of Technology</h3>
        <div className="flex justify-between text-gray-400 mb-2">
          <span>B.E. in Industrial Engineering</span>
          <span>2021-2025</span>
        </div>
        <p className="text-gray-300 mb-2">GPA: 3.33 out of 4</p>
        <div className="mb-2">
          <span className="font-semibold text-gray-200">Taken Courses: 156 SKS</span>
          <table className="w-full text-sm mt-2">
            <thead>
              <tr className="text-gray-400">
                <th className="text-left">Course Name</th>
                <th>Total Credit</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {visibleCourses.map((course, idx) => (
                <tr key={idx} className="text-gray-200">
                  <td>{course.name}</td>
                  <td className="text-center">{course.total}</td>
                  <td className="text-center">{course.obtained}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="mt-2 px-4 py-1 bg-[#4fc3f7] text-[#232b3e] rounded hover:bg-[#1976d2] hover:text-white transition"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-gray-200">Thesis:</span>
          <a
            href="https://repository.its.ac.id/126749/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 ml-2 underline hover:text-[#4fc3f7] transition"
          >
            Development of Lean 4.0 Implementation Strategy in Indonesian Automotive Industry
          </a>
        </div>
        <div className="mt-2">
          <span className="font-semibold text-gray-200">Supervisor:</span>
          <span className="text-gray-300 ml-2">Putu Dana Karningsih S.T., M.Eng.Sc., Ph.D</span>
        </div>
      </div>
    </section>
  );
}
