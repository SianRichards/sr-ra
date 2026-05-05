import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const MobileNavBar = ({ onClose }: { onClose: () => void }) => {
  return (
    <nav className="w-64 flex flex-col bg-yellow-200 text-teal-700 h-full">
      <FontAwesomeIcon
        size="lg"
        icon={faXmark}
        onClick={onClose}
        className="self-end cursor-pointer pt-2 pr-2"
      />
      <div className="flex flex-col gap-2 pl-2">
        <NavLink to="/" onClick={onClose}>
          {({ isActive }) => <span>Home {isActive ? "<<" : ">>"}</span>}
        </NavLink>
        <NavLink to="/career-timeline" onClick={onClose}>
          {({ isActive }) => (
            <span>Career timeline {isActive ? "<<" : ">>"}</span>
          )}
        </NavLink>
        <NavLink to="/projects" onClick={onClose}>
          {({ isActive }) => <span>Projects {isActive ? "<<" : ">>"}</span>}
        </NavLink>
      </div>
    </nav>
  );
};
export default MobileNavBar;
