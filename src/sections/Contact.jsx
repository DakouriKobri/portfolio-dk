import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="container">
        <div className="description">
          <p>
            Here are the technologies that I already know alongside others I am
            currently learning.
          </p>
        </div>
        <ul className="contact-list">
          <li className="contact-item">
            <i className="fas">
              <FontAwesomeIcon icon={["fas", "envelope-square"]} />
            </i>
            <a href="mailto:maurille.kobri@gmail.com">
              maurille.kobri@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <i className="fas">
              <FontAwesomeIcon icon={["fas", "phone-square"]} />
            </i>
            <a href="tel:+46735924938">+46 73 592 4938</a>
          </li>
          <li className="contact-item">
            <i className="fas">
              <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
            </i>
            <a
              href="http://maps.google.com/?q=Stockholm, Sweden"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stockholm, Sweden
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </section>
  );
}
