const ApiProjectCard = ({ title, description, techStack, projectLink }) => {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="api-card-link">
      <div className="api-project-card">
        <div className="api-card-icon">⚙️</div>
        <h3 className="api-card-title">{title}</h3>
        <p className="api-card-desc">{description}</p>
        <p className="api-card-tech"><strong>Tech Stack:</strong> {techStack}</p>
      </div>
    </a>
  );
};

export default ApiProjectCard;
