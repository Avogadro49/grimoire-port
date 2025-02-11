// import React from "react";
import styles from "./AboutMe.module.css";
import Avatar from "../../static/images/avatar/my-avatar-forreal.png";
import AvatarBorder from "../../static/images/avatar/avatar-border.png";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import Resume from "../../static/images/cv/real_cv.pdf";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const AboutMe = () => {
  const skills = `> skill list
  front_end:
    vanilla javascript - react,
    html, css, tailwind, bootstrap,
    chakra ui.
   back_end:
   node.js, express.js, python, flask.py,
   ASP.NET, blazor.
   version_control:
   git, docker. 
   understanding SQL and NoSql databases`;
  return (
    <section className={styles.about_me_section}>
      <header>
        <h1 className={styles.about_me_header}>0x00 - About Me</h1>
      </header>
      <div className={styles.about_me_content}>
        <div className={styles.avatar_wrapper}>
          <img
            className={styles.avatar}
            src={Avatar}
            alt="My Avatar"
            style={{ width: "150px", height: "150px" }}
          />
          <img
            src={AvatarBorder}
            alt="avatar border"
            className={styles.avatar_border}
          />
        </div>
        <p className={styles.about_me_text}>
          <span>Here, I'm going to talk a little bit about myself.</span> I'm
          Nika. I enjoy programming and everything related to it. My main field
          is web development, but I also have some understanding of software
          engineering. My goal isn't just to find a job—I want to do programming
          and get paid for it. I really enjoy finding ways to solve problems
          because
          <span> "the best way to predict the future is to invent it." </span>
          Here is my resume {"=>"}{" "}
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </p>
        <div className={styles.power_shell}>
          <CodeBlock code={skills} title="Skills.sh" />
        </div>
      </div>
      <h2 className={styles.project_header}>Projects</h2>
      <div className={styles.project_content}>
        <ProjectsCard />
      </div>
    </section>
  );
};

export default AboutMe;
