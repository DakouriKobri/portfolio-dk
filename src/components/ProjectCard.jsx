export default function ProjectCard({ project }) {
  const { thumbnail, title, isCompleted } = project;
  return (
    <article className="card">
      <div className="thumbnail-container">
        <label className="project-status">COMING SOON</label>
        <img className="thumbnail" src={thumbnail} alt={title} />
      </div>
      <p>{title}</p>
    </article>
  );
}
