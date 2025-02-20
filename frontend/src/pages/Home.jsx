import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="homeContainer">
      <header className="navbar">
        <h1 className="logo">SkillSwap</h1>
        <nav>
          <Link to="/" className="navLink">Home</Link>
          <Link to="/profile" className="navLink">Profile</Link>
        </nav>
      </header>

      <section className="coursesSection">
        <h2 className="sectionTitle">Recommended Courses for You</h2>
        <div className="coursesGrid">
          <div className="courseCard">
            <iframe src="https://www.youtube.com/embed/Ke90Tje7VS0" title="React JS Crash Course" allowFullScreen></iframe>
            <p>React.js Crash Course</p>
          </div>
          <div className="courseCard">
            <iframe src="https://www.youtube.com/embed/cTUD_vCrY7M?si=6KppydT8UofDxwPa" title="UI/UX Design Fundamentals" allowFullScreen></iframe>
            <p>UI/UX Design Fundamentals</p>
          </div>
          <div className="courseCard">
            <iframe src="https://www.youtube.com/embed/Oe421EPjeBE" title="Python for Beginners" allowFullScreen></iframe>
            <p>Node.js & Express.js</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 SkillSwap | Learn & Grow Together</p>
      </footer>
    </div>
  );
}
