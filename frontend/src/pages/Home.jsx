import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.png'; // Import from src/assets
import '../styles/home.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div 
      className="homeContainer"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <section className="heroSection">
        <h2 className="heroTitle">Become a pro with thousands <br /> of creative classes.</h2>
        <div className="signupOptions">
          <button className="signupBtn google">Continue with Google</button>
          <button className="signupBtn facebook">Continue with Facebook</button>
          <button className="signupBtn apple">Continue with Apple</button>
          <Link to="/signup" className="emailSignup">Continue with email</Link>
        <p className='signupOptionsdiscription'> 
          By signing up you agree to Skillshare's <b> Terms of Service</b> and <b> Privacy Policy </b>,<br /> and agree to receive marketing communications from <b> Skillshare </b> at the email address provided.<br /> This page is protected by <b> reCAPTCHA </b>and is subject to <b> Google's Terms of Service </b><br /> and <b>Privacy Policy.</b> </p>
        </div>
        
      </section>

      <section className="categoriesSection">
        <div className="categoryCard">Photography</div>
        <div className="categoryCard">Fine Art</div>
        <div className="categoryCard">Marketing</div>
        <div className="categoryCard">Graphic Design</div>
        <div className="categoryCard">Illustration</div>
      </section>
    </div>
  );
}
