import { NavLink } from "react-router-dom";
import Header from "./Header";
import { faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className="hidden md:flex flex-col h-full md:w-1/5 bg-yellow-200 p-3 border-r-8 border-teal-700">
      <Header>Sian Richards://</Header>
      <div className="flex flex-col gap-2 ">
        <NavLink to="/">
          {({ isActive }) => <span>Home {isActive ? "<<" : ">>"}</span>}
        </NavLink>
        <NavLink to="/career-timeline">
          {({ isActive }) => (
            <span>Career timeline {isActive ? "<<" : ">>"}</span>
          )}
        </NavLink>
        <NavLink to="/projects">
          {({ isActive }) => <span>Projects {isActive ? "<<" : ">>"}</span>}
        </NavLink>
      </div>

      <div className="mt-auto flex gap-3 pt-4 justify-self-end">
        <a href="mailto:sian_richards@hotmail.co.uk" title="Email">
          <FontAwesomeIcon icon={faEnvelope} className="cursor-pointer" />
        </a>

        <a
          href="https://www.linkedin.com/in/sian-richards-3a1235185/"
          target="_blank"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer" />
        </a>

        <a
          href="https://discord.com/users/1302319563710533726"
          target="_blank"
          title="Discord"
        >
          <FontAwesomeIcon icon={faDiscord} className="cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
