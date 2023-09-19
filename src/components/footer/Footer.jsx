import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import "./styles.css";

function Footer() {
  const location = useLocation();

  return location.pathname === "/" || location.pathname === "/login" ? (
    <></>
  ) : (
    <footer className="container footer">
      <figure className="footer_logo-container">
        <img
          className="logo"
          src="https://fontmeme.com/permalink/230906/dc258570a53571d2cfa446d10ac0bcf2.png"
          alt="Logo"
        />
      </figure>
      <h2>&copy; Fernando Hernandez</h2>
      <div className="social">
        <a target="_blank" href="https://github.com/FerProx90">
          <FiGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/fernando-hernandez-pti-jsreact/"
        >
          <BiLogoLinkedin />
        </a>
        <a target="_blank" href="https://www.instagram.com/charlestone.chai/">
          <BiLogoInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
