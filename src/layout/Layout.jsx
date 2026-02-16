import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  Fa500Px,
  FaTumblr,
} from "react-icons/fa";

export default function Layout({ children }) {
  return (
    <>
      <nav className="my-5 mr-5 flex flex-col items-center md:my-6 md:mr-6">
        <h1 className="m-0 h-[150px] w-[150px] cursor-pointer rounded-full [&_img]:block [&_img]:h-full [&_img]:w-full [&_img]:rounded-full [&_img]:transition-[filter_200ms_ease] [&:hover_img]:grayscale">
          <NavLink to="/" className="block h-full w-full">
            <img className="avatar" src="/images/me.jpg" alt="Avatar" />
          </NavLink>
        </h1>

        <div className="social my-6 flex justify-between [&_a]:mx-1.5">
          <a
            href="https://github.com/turtleguyy"
            rel="noopener"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/turtleguyy"
            rel="noopener"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/turtleguyy"
            rel="noopener"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
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

        <ul className="m-0 flex list-none flex-col items-center p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/css"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              css ftw
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              projects
            </NavLink>
          </li>
        </ul>
      </nav>

      <section className="content my-5 ml-5 min-w-0 flex-1 md:my-6 md:ml-6">
        {children}
      </section>
    </>
  );
}
