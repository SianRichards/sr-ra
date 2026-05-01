import { Link } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {
  return (
    <nav className="flex flex-col h-full w-1/5 bg-yellow-100 p-3">
      <Header>Sian Richards://</Header>
      <div className="flex flex-col gap-2">
        <Link to="/">Home {">>"}</Link>
        <Link to="/career">Career timeline {">>"}</Link>
        <Link to="/projects">Projects {">>"}</Link>
      </div>
    </nav>
  );
};

export default NavBar;
