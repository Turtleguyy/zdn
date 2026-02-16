import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  Fa500Px,
  FaTumblr,
} from "react-icons/fa";

export function Layout({ children }) {
  return (
    <>
      <nav className="flex flex-col items-center my-5 mr-5 md:my-6 md:mr-6">
        <h1 className="m-0 w-[150px] h-[150px] rounded-full cursor-pointer [&_img]:transition-[filter_200ms_ease] [&:hover_img]:grayscale [&_img]:block [&_img]:w-full [&_img]:h-full [&_img]:rounded-full">
          <NavLink to="/" className="block w-full h-full">
            <img className="avatar" src="/images/me.jpg" alt="Avatar" />
          </NavLink>
        </h1>

        <div className="social flex justify-between my-6 [&_a]:mx-1.5">
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

        <ul className="flex flex-col items-center list-none p-0 m-0">
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

      <section className="content flex-1 min-w-0 my-5 ml-5 md:my-6 md:ml-6">
        {children}
      </section>
    </>
  );
}
