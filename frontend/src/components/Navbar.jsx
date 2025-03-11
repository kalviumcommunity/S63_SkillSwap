import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">SkillSwap</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/skillswap">Form</Link>
      </div>
    </nav>
  );
}
export default Navbar;