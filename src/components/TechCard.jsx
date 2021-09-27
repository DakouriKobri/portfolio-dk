export default function TechCard({ tech }) {
  const { icon, name } = tech;

  return (
    <article className="card">
      <div className="icon-container">
        <img className="icon" src={icon} alt={name} />
      </div>
      <p>{name}</p>
    </article>
  );
}
