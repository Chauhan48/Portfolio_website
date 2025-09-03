import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <Link to="about" smooth={true} duration={50}>About</Link>
        <Link to="workExperience" smooth={true} duration={50}>Work Experience</Link>
        <Link to="project" smooth={true} duration={50}>Projects</Link>
        <Link to="education" smooth={true} duration={50}>Education</Link>
      </div>
    </nav>
  );
};

export default Navbar;
