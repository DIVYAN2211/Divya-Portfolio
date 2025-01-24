import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showExperience, setShowExperience] = useState(false);

  const toggleSkill = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleExperience = () => {
    setShowExperience(!showExperience);
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      {/* Toggling Sections for Programming, Core, Tools, Libraries, Visualization */}
      {["programming", "core", "tools", "libraries", "visualization"].map((section) => (
        <div className={section} key={section}>
          <button onClick={() => toggleSkill(section)}>
            {activeSection === section ? `Hide ${section.charAt(0).toUpperCase() + section.slice(1)} Skills` : `Show ${section.charAt(0).toUpperCase() + section.slice(1)} Skills`}
          </button>
          {activeSection === section && (
            <ul>
              <li>
                {/* Example Skills */}
                {section === "programming" && "C, C++, HTML, CSS, JavaScript, Python, Java, SQL"}
                {section === "core" && "Data Structures & Algorithms, DBMS"}
                {section === "tools" && "VS Code, Git, Anaconda, Figma, Canva"}
                {section === "libraries" && "NumPy, Pandas"}
                {section === "visualization" && "Tableau, Power BI"}
              </li>
            </ul>
          )}
        </div>
      ))}

      {/* Experience Section with Blinking Button */}
      <div className="experience-section">
        <button className={`experience-btn ${showExperience ? "clicked" : ""}`} onClick={toggleExperience}>
          {showExperience ? "Hide Experience" : "Show Experience"}
        </button>
        {showExperience && (
          <div className="experience-details">
            <h4>Experience</h4>
            <br></br>
            <p><strong>WEB DEVELOPMENT – Octanet Services</strong><br />
              Applying the knowledge of Web development to design websites to enhance user-friendly interface.
            </p><br></br>
            <p><strong>C/C++ PROGRAMMING INTERNSHIP – Cognifyz Technologies</strong><br />
              Applying the knowledge of Programming to contribute to innovative projects in a professional way.
            </p>
          </div>
        )}
      </div>

      {/* LeetCode Section with Animation */}
      <div className="leetcode-section">
        <h3> My LeetCode Profile!</h3>
        <a
          href="https://leetcode.com/u/divyanagaraj/"
          target="_blank"
          rel="noopener noreferrer"
          className="leetcode-link"
        >
          Visit LeetCode
        </a>
      </div>
    </section>
  );
};

export default Skills;
