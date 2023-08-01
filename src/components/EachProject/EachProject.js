import styles from "./EachProject.module.css";
const EachProject = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles["header-img"]} src={props.cover}></img>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles["tech-stack"]}>
          <span className={styles["tech-stack-heading"]}>
            Tech Stack:&nbsp;
          </span>
          {props.techStack
            ? props.techStack.map((tech, i) => {
                return (
                  <span key={i}>
                    {i === 0 ? " \xa0" : ""}
                    {tech}
                    {i != props.techStack.length - 1 ? ", \xa0" : ""}
                  </span>
                );
              })
            : null}
        </div>
        <div className={styles.links}>
          <div
            className={
              styles["each-link"] +
              (props.previewLink ? "" : " " + styles["link-disabled"])
            }
          >
            <a
              href={props.previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icon_link.svg"></img>
              <span>Live Preview</span>
            </a>
          </div>
          <div
            className={
              styles["each-link"] +
              (props.codeLink ? "" : " " + styles["link-disabled"])
            }
          >
            <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
              <img src="/icon_github.svg"></img>
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
