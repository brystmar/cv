import React from "react";
import myProjects from "../data/projects";
import Proj from "./Proj";

export default function Projects() {
    return (
        <section
            id="Projects"
            aria-label="Thomas' personal projects"
            className="project-section"
        >
            <h1>Projects</h1>
            {myProjects.map((proj, index) =>
                <Proj
                    key={index}
                    name={proj.name}
                    description={proj.description}
                    status={proj.status}
                    notes={proj.notes}
                    url={proj.url}
                    repo={proj.repo}
                    screenshot={proj.screenshot}
                    tech={proj.tech}
                />
            )}
        </section>
    )
}
