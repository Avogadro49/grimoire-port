// import React from "react";
// import PortfolioProject01 from "../../static/images/projects/portfolio_project01.png";
import ProjectData from "../../_data/_data.json";
import { ProjectProps } from "../../types";
import styles from "./ProjectsCard.module.css";

const ProjectsCard: React.FC = () => {
  const projects: ProjectProps[] = ProjectData;
  return (
    <>
      <div className={styles.project_list}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project_card}>
            <div className={styles.project_card_header}>
              <img src={project.image} alt={`Project ${index + 1}`} />
            </div>
            <div className={styles.project_card_desc}>
              <p className={styles.project_card_text}>{project.description}</p>

              {project.links && (
                <div className={styles.project_links}>
                  {project.links.map((link, linkIndex) => (
                    <div
                      key={linkIndex}
                      className={styles.project_links_buttons_row}
                    >
                      <a
                        href={link.SourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.project_links_anchor}
                      >
                        <button className={styles.project_links_button}>
                          Source Code
                        </button>
                      </a>
                      <a
                        href={link.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.project_links_button}>
                          Live
                        </button>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsCard;
