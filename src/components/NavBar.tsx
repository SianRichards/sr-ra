import { Link } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {
  return (
    <nav className="flex flex-col h-full w-1/5 bg-yellow-100 p-3">
      <Header />
      <div className="flex flex-col text-xl">
        <Link to="/">Home {">>"}</Link>
        <Link to="/about">About {">>"}</Link>
        <Link to="/professional">Professional {">>"}</Link>
        <Link to="/less-professional">Less Professional {">>"}</Link>
        <Link to="/projects">Projects {">>"}</Link>
      </div>
    </nav>
  );
};

export default NavBar;
