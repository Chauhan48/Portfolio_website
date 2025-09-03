import ApiProjectCard from "./ApiProjectCard";
import ProjectCard from "./ProjectCard"

const projects = [
  { id: 1, image: 'flappy_bird.png', techStackUsed: 'React, JavaScript, Canvas', projectTitle: 'Flappy Bird Game', projectLink: 'https://chauhan48.github.io/Flappy_Bird_Frontend/' },
  { id: 2, image: 'taste_haven.png' , techStackUsed: 'React, Bootstrap, Node, Mongodb, Express, JavaScript', projectTitle: 'Taste Haven', projectLink: 'https://taste-haven.vercel.app/' },
  { id: 3, image: 'netflix_clone.png' , techStackUsed: 'React, JavaScript, TailwindCSS, Firebase', projectTitle: 'Project 3', projectLink: 'https://github.com/Chauhan48/Netflix_Clone' },
  // { id: 4, image: 'image4.jpg', techStackUsed: 'Upwork API, Cron', projectTitle: 'Project 4', projectLink: 'https://...' },
  // { id: 5, image: 'image5.jpg', techStackUsed: '2FA Auth', projectTitle: 'Project 5', projectLink: 'https://...' },
];

const Project = () => {
  return (
    <div style={{ marginTop: "5%", marginBottom: "5%" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Projects</h1>
      <div className="projects-grid">

        {projects.map(p => (
          <ProjectCard
            key={p.id}
            image={p.image}
            techStackUsed={p.techStackUsed}
            projectTitle={p.projectTitle}
            projectLink={p.projectLink}
          />
        ))}
        <ApiProjectCard
          title="Chat App API"
          description="Built a real-time chat backend with user authentication, message delivery, and WebSocket support."
          techStack="Node.js, Express, Socket.IO, MongoDB, TypeScript"
          projectLink="https://github.com/Chauhan48/CHAT_APP_BACKEND"
        />

        <ApiProjectCard
          title="Library Management API"
          description="Developed a RESTful API for managing books, users, and loans with search and notification features."
          techStack="Node.js, Express, MongoDB, JavaScript"
          projectLink="https://github.com/Chauhan48/Library-management-system-"
        />

      </div>
    </div>
  );
}

export default Project
