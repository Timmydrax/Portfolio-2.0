import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import logo from "../assets/raviKumarLogo.webp";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home-page">
            <div className="text-3xl font-medium" aria-label="logo">
              Timmy
              <span className="font-black text-4xl text-blue-400">.</span>
            </div>
          </a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/alade-pelumi-99177b250/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Timmydrax"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/timmydrax101?igsh=MTRzNmI5em1nb2JsZQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/DraxTimmy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            className="hover:text-white transition"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
