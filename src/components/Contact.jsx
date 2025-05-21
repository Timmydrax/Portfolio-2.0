import { CONTACT } from "../constants";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section className="border-t border-stone-900 pb-10">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter flex flex-col gap-4">
          <p>{CONTACT.address}</p>
          <p>{CONTACT.phoneNo}</p>
          <a
            href="mailto:timmydrax@gmail.com"
            target="_blank"
            className="inline-block mx-auto my-1 text-white w-fit no-underline border-b transition"
          >
            {CONTACT.email}
          </a>

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
        </div>
      </section>
    </>
  );
};

export default Contact;
