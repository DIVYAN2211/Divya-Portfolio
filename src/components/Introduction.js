import React from "react";
import "./Introduction.css";
import profileImage from "../assets/profile.png";

const Introduction = () => {
  return (
    <section id="introduction" className="introduction">
      <div className="intro-content">
        <img
          src={profileImage}
          alt="Divya Nagaraj"
          className="profile-image"
        />
        <h1 className="animated-heading">I am Divya Nagaraj</h1>
        <p className="intro-text animated-text">
          Hi, I'm Divya Nagaraj, a passionate software developer aiming to make an
          impact in the field of technology. My goal is to combine innovation with
          creativity to solve real-world problems. I specialize in developing
          user-friendly applications and systems that cater to diverse needs, with
          a particular interest in accessibility and data-driven solutions. I am
          always eager to learn and explore new technologies to stay ahead in the
          rapidly evolving tech landscape.
        </p>
        <p className="intro-text animated-text">
          With a strong foundation in programming, data science, and web
          development, I am committed to creating solutions that are both efficient
          and scalable. My experience includes working on projects in areas like
          machine learning, predictive analytics, and web and mobile app
          development. I am driven by the challenge of solving complex problems and
          collaborating with teams to bring ideas to life.
        </p>
        <p className="intro-text animated-text">
          By continuously improving my skills and contributing to meaningful
          projects, I aspire to grow both professionally and personally while making
          a positive contribution to the tech community.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
