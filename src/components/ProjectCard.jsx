
const ProjectCard = ({ image, techStackUsed, projectTitle, projectLink }) => {
  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
    >
      <div className="project-card">
        <img src={image} alt={projectTitle} className="project-image" />
        <h3 className="project-title">{projectTitle}</h3>
        <div className="tech-stack-used">
          <strong>Tech Stack Used:</strong> <span>{techStackUsed}</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
