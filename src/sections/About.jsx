import Picture from "../assets/images/Dakouri.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__text">
        <h2>About me</h2>
        <p>
          Hi! I’m Dakouri, a frontend developer. My years of bioscience research
          skills help me approach software development with strict methodology
          while being open to creativity.
        </p>
        <p>
          I specialize in React and TypeScript and my motto is “clean code”.
          With this website, I showcase my work.
        </p>
      </div>

      <div className="about__image">
        <img src={Picture} alt="Dakouri" />
      </div>
    </section>
  );
}
