import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm **Divya Nagaraj**, a passionate software developer dedicated to creating innovative and user-friendly applications. I thrive on exploring new technologies and applying them to solve real-world challenges. My journey in the tech world is fueled by curiosity and a desire to make a meaningful impact through scalable solutions, particularly in accessibility, data science, and web/mobile app development.
      </p>
      <p>
        I specialize in building applications that bridge gaps, such as creating accessible communication tools for the deaf and mute community, leveraging sign language recognition and real-time text-to-speech features. This project reflects my belief in technology’s power to bring about positive social change and improve lives, and it motivates me to continue working on solutions that make a difference.
      </p>
      <p>
        My work is driven by a commitment to continuous learning and collaboration. I enjoy working in Agile environments and value the exchange of ideas with diverse teams to create impactful solutions. Whether it's refining my technical skills or staying updated with industry trends, I’m always eager to grow and take on new challenges.
      </p>
      <p>
        I'm excited to contribute to meaningful projects and expand my knowledge. Let's connect and create something amazing together! Feel free to reach out if you’re looking for a developer passionate about turning ideas into reality.
      </p>
      {/* LinkedIn button with redirection */}
      <a
        href="https://www.linkedin.com/in/divya-nagaraj-38b5a128b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="contact-btn">Contact Me (LinkedIn)</button>
      </a>
      {/* GitHub button */}
      <a
        href="https://github.com/DIVYAN2211" // Replace with your GitHub profile link
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="contact-btn">Visit GitHub</button>
      </a>
      {/* Email button */}
      <a href="mailto:divyanagaraj2211@gmail.com">
        <button className="contact-btn">Email Me</button>
      </a>
    </section>
  );
};

export default About;
