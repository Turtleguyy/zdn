import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaFilePdf,
  Fa500Px,
  FaTumblr,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Layout({ children }) {
  return (
    <>
      <nav className="my-5 mr-5 flex w-full max-w-[280px] flex-col items-center max-[700px]:mx-auto max-[700px]:mr-0 max-[700px]:max-w-none md:my-6 md:mr-6">
        <div className="m-0 h-[150px] w-[150px] cursor-pointer rounded-full [&_img]:block [&_img]:h-full [&_img]:w-full [&_img]:rounded-full [&_img]:transition-[filter_200ms_ease] [&:hover_img]:grayscale">
          <NavLink to="/" className="block h-full w-full">
            <img className="avatar" src="/images/me.jpg" alt="Zachary Nicoll" />
          </NavLink>
        </div>

        <div className="social my-6 flex w-full max-w-[220px] flex-wrap justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/zacharynicoll/"
            rel="noopener"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="/zachary_nicoll_resume.pdf"
            rel="noopener"
            target="_blank"
            aria-label="Resume PDF"
          >
            <FaFilePdf size={24} />
          </a>
          <a
            href="https://github.com/turtleguyy"
            rel="noopener"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://codepen.io/Turtleguyy/"
            rel="noopener"
            target="_blank"
            aria-label="CodePen"
          >
            <FaCodepen size={24} />
          </a>
          <a
            href="https://x.com/turtleguyy"
            rel="noopener"
            target="_blank"
            aria-label="X"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://500px.com/turtleguyy"
            rel="noopener"
            target="_blank"
            aria-label="500px"
          >
            <Fa500Px size={24} />
          </a>
          <a
            href="http://conswogglerations.com/"
            rel="noopener"
            target="_blank"
            aria-label="Tumblr"
          >
            <FaTumblr size={24} />
          </a>
        </div>

        <ul className="m-0 flex list-none flex-col items-center p-0 max-[700px]:w-full max-[700px]:flex-row max-[700px]:justify-center max-[700px]:gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/case-studies"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Case Studies
            </NavLink>
          </li>
        </ul>
      </nav>

      <section className="content my-5 ml-5 min-w-0 flex-1 max-[700px]:mx-auto max-[700px]:ml-0 max-[700px]:w-full md:my-6 md:ml-6">
        {children}
      </section>
    </>
  );
}
