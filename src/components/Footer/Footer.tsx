import { Link } from "react-scroll";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <span className="back-to-top">
        <Link to="hero" duration={1000}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </Link>
      </span>
      <div className="social-links flex md:flex-col gap-4">
        <a
          href="mailto: 9ohn.5hih@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/john-chih-en-shih/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shihjohn/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <p className="footer__text">
        4145 Porfolio © {new Date().getFullYear()} - Designed & developed by{" "}
        <a
          href="https://github.com/shihjohn"
          target="_blank"
          rel="noopener noreferrer"
        >
          John Shih
        </a>
      </p>
    </footer>
  );
};

export default Footer;
