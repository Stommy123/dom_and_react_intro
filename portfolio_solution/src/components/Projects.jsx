import React from "react";
import Project from "./Project";
import projects from "../data/projects.json";

const Projects = _ => (
  <div id="portfolio">
    {projects.allProjects.map(({ title, imgName, description }) => (
      <Project title={title} imgName={imgName} description={description} />
    ))}
  </div>
);

export default Projects;
