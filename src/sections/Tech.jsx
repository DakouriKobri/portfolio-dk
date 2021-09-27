import TechCard from "../components/TechCard";
import { techData } from "../data/techData";

const myTechData = techData();

export default function Tech() {
  const TechList = myTechData.map((tech) => (
    <TechCard key={tech.id} tech={tech} />
  ));
  return (
    <div className="tech">
      <h2>Tech</h2>
      <div className="container">
        <div className="description">
          <p>
            Here are the technologies that I already know alongside others I am
            currently learning.
          </p>
        </div>
        <div className="tech-items">{TechList}</div>
      </div>
    </div>
  );
}
