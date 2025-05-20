import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp";
import { FaSquareXTwitter, FaX } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home-page">
            <img
              src={logo}
              alt="The brand logo for the portfolio"
              className="mx-2"
              width={50}
              height={32}
            />
          </a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/alade-pelumi-99177b250/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Timmydrax"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/timmydrax101?igsh=MTRzNmI5em1nb2JsZQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/DraxTimmy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
