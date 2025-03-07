import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">SkillSwap</h1>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search for classes, digital porducts, teachers, and more" />
      </div>

      <div className="navbar-right">
        <div className="navLinks">
          <Link to="/" className="navLink">Home</Link>
          <Link to="/explore" className="navLink">Explore</Link>
          <Link to="/profile" className="navLink">Profile</Link>
        </div>
        <div className="authButtons">
          <Link to="/signup" className="signUpBtn">Sign Up</Link>
          <Link to="/login" className="signInBtn">Sign In</Link>
        </div>
      </div>
    </nav>
  );
}
