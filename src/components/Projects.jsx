import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text"></span></h2>

        <div className="grid project-grid">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default Projects;
