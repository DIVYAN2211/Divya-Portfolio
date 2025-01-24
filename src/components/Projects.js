// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <div className="project-card">
            <h3>YIELDIFY [Smart Agriculture System]</h3>
            <p><strong>Role:</strong> Frontend, Research</p>
            <p><strong>May 2024</strong></p>
            <ul>
              <li>Built an integrated smart agriculture system using CNN and DenseNet121 for pest detection.</li>
              <li>Achieved a 96% accuracy rate for pest detection.</li>
              <li>Applications include plant disease detection, pest detection, land leveling, soil type prediction, and crop recommendation.</li>
            </ul>
          </div>
        </div>
        <div className="project-item">
          <div className="project-card">
            <h3>ASD PREDICTION [Neurological Disorder Prediction System]</h3>
            <p><strong>Role:</strong> Backend, Frontend - Streamlit, Research</p>
            <p><strong>Nov 2024</strong></p>
            <ul>
              <li>Developed a machine learning-based system leveraging SVM and Random Forest algorithms.</li>
              <li>Achieved over 93% accuracy in predicting Autism Spectrum Disorder (ASD).</li>
              <li>Applications include early ASD screening, behavioral pattern analysis and decision-making.</li>
            </ul>
          </div>
        </div>
        <div className="project-item">
          <div className="project-card">
          <h3>ABILITY HUB [Website for Disabilities]</h3>
          <p><strong>Role:</strong> FrontEnd Developer</p>
        <p><strong>Ongoing Project</strong></p>
<ul>
  <li>Developing an inclusive platform focused on providing resources for individuals with disabilities.</li>
  <li>Features include support for assistive technologies, educational content, and community engagement tools.</li>
</ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
