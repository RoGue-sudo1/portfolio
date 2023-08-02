import EachProject from "../EachProject/EachProject";
import styles from "./MyProjects.module.css";
import {projectsData} from '../data/projectsData'

const MyProjects = () => {
  return (
    <div id="projects" className={styles.main}>
      <div className={styles.heading}>My Projects</div>
      <div className={styles.projects}>
        {projectsData
          ? projectsData.map((project, i) => {
              return (
                <EachProject
                  key={i}
                  cover={project.cover}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  previewLink={project.previewLink}
                  codeLink={project.codeLink}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MyProjects;
