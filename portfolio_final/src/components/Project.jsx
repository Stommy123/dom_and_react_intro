import React from "react";

const Project = ({ title, imgName, description }) => {
  const classes = imgName + " portfolio-img";
  return (
    <div>
      <h2>{title}</h2>
      <div className={classes} />
      <p>{description}</p>
    </div>
  );
};

export default Project;
