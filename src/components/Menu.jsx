import logo from "../assets/images/logo.png";

export default function Menu() {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#hero" className="logo">
              <span>
                <img src={logo} alt="logo of Dakouri" />
              </span>
            </a>
          </li>
          <li>
            <a href="#tech">Tech</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
