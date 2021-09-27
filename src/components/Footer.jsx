import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <div>
      <ul className="list-social-media">
        <li>
          <a href="https://www.linkedin.com/in/dakouri-m-kobri-009192208/">
            <i className="fab fa-linkedin">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                size="lg"
                style={{ color: "blue" }}
              />
            </i>
          </a>
        </li>
        <li>
          <a href="https://github.com/DakouriKobri">
            <i className="fab fa-github-square">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="lg"
                style={{ color: "blue" }}
              />
            </i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/DakouriMKobri">
            <i className="fab fa-twitter-square">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                size="lg"
                style={{ color: "blue" }}
              />
            </i>
          </a>
        </li>
      </ul>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} {"\u2022"} Dakouri M. Kobri
        </p>
      </div>
    </div>
  );
}
