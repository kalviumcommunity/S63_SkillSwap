import { Link } from 'react-router-dom';
import '../styles/profile.css';

export default function Profile() {
  return (
    <div className="profileContainer">
      <header className="navbar">
        <h1 className="logo">SkillSwap</h1>
        <nav>
          <Link to="/" className="navLink">Home</Link>
          <Link to="/profile" className="navLink active">Profile</Link>
        </nav>
      </header>

      <div className="profileSection">
        <div className="profileCard">
        <h2 className="profileTitle">Your Profile</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeFgmfnD6bTanlmMBIMrHmIa3HRk8FPOKg-xY1B9W2b516D10WgbuZNA&usqp=CAE&s" alt="" />
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Skills:</strong> React, UI/UX, Python</p>
          <p><strong>Looking to Learn:</strong> Backend Development</p>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 SkillSwap | Learn & Grow Together</p>
      </footer>
    </div>
  );
}
