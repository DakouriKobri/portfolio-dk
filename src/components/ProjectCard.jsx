export default function ProjectCard({ project, onClick }) {
  const { thumbnail, title, isCompleted } = project;
  return (
    <article className="card">
      <div
        className={
          isCompleted ? "thumbnail-container" : "thumbnail-container active"
        }
        onClick={onClick}
      >
        <label className="project-status">COMING SOON</label>
        <img className="thumbnail" src={thumbnail} alt={title} />
      </div>
      <p>{title}</p>
    </article>
  );
}
