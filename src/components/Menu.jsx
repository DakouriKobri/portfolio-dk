import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Project</NavLink>
          </li>
          <li>
            <NavLink to="/">Logo</NavLink>
          </li>
          <li>
            <NavLink to="/tech">Teck</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
