import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((pro , index) => {
          return (
          <ProjectItem key={index} name={pro.name} about={pro.about} technologies={pro.technologies}/>
          )
        })}
      </div>
    </div>
  );
}

export default ProjectList;
