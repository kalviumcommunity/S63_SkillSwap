import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SkillSwapForm from "./pages/SkillSwapForm"; // Import the form
import AddEntity from "./pages/AddEntity";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skillswap" element={<SkillSwapForm />} /> 
            <Route path="/addentity" element={<AddEntity />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
