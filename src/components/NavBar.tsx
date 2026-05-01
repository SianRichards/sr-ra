import { NavLink } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {
  return (
    <nav className="flex flex-col h-full w-1/5 bg-yellow-100 p-3 border-r-8 border-teal-700">
      <Header>Sian Richards://</Header>
      <div className="flex flex-col gap-2 ">
        <NavLink to="/">
          {({ isActive }) => <span>Home {isActive ? "<<" : ">>"}</span>}
        </NavLink>
        <NavLink to="/career">
          {({ isActive }) => (
            <span>Career timeline {isActive ? "<<" : ">>"}</span>
          )}
        </NavLink>
        <NavLink to="/projects">
          {({ isActive }) => <span>Projects {isActive ? "<<" : ">>"}</span>}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
