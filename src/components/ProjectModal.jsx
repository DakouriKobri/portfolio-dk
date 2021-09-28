import React from "react";

export default function ProjectModal({ project }) {
  const {
    title,
    thumbnail,
    description,
    technologyPills,
    hostingLink,
    gitRepositoryLink,
  } = project;
  return (
    <div className="modal-card">
      <div className="modal-thumbnail">
        <img className="thumbnail" src={thumbnail} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="skills">
        {technologyPills.map((skills) => (
          <span key={technologyPills.indexOf(skills)}>{skills}</span>
        ))}
      </div>
      <div className="btns">
        <a href={hostingLink}>
          <button className="btn-to-web">Visit website/app</button>
        </a>
        <a href={gitRepositoryLink}>
          <button className="btn-to-repo"> Git repository</button>
        </a>
      </div>
    </div>
  );
}
