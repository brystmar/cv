import React from "react";
import myProjects from "../data/projects";
import Proj from "./Proj";

function Projects() {
    const projectList = myProjects.map((proj, index) =>
        <Proj key={index}
              name={proj.name}
              description={proj.description}
              notes={proj.notes}
              url={proj.url}
              repo={proj.repo}
              screenshot={proj.screenshot}
              tech={proj.tech}/>)
    return (
        <section
            id="Projects"
            aria-label="Thomas' personal projects"
            className="projects-container">

            <h1>Projects</h1>
            {projectList}

        </section>
    )
}

export default Projects;