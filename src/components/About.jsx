const skillsRows = [
  ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  ["Redux", "Tailwind CSS", "Bootstrap", "GraphQL", "Socket.io", "Postman"],
  ["Firebase", "Docker", "Git", "GitHub"],
  ["Nodemon", "Swagger", "JWT", "OAuth2.0"]
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-name">I'm <br />Anshit Chauhan</div>
      <div className="about-description">
        I’m a MERN Stack Developer passionate about building responsive, scalable, and user-friendly web applications. I enjoy turning ideas into interactive products, with hands-on experience in React, Node.js, Express, and MongoDB.
      </div>

      <div className="skills-wrapper">
        {skillsRows.map((row, idx) => (
          <div key={idx} className="skills-row">
            {row.map(skill => (
              <span key={skill} className="skill">{skill}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;
