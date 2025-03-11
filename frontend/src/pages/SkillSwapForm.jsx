import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SkillSwapForm.css"; // Import the CSS file


const SkillSwapForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        skill: "",
        description: "",
    });
    const [skills, setSkills] = useState([]);

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/skillswap", formData);
            alert("Skill added successfully!");
            setFormData({ name: "", skill: "", description: "" });
            fetchSkills();
        } catch (error) {
            console.error("Error adding skill:", error);
        }
    };

    // Fetch Skills from Backend
    const fetchSkills = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/skillswap");
            setSkills(res.data);
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    return (
        <div className="skill-swap-container">
            <h2>Skill Swap Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="skill"
                    placeholder="Skill to Offer"
                    value={formData.skill}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Describe your skill"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>

            <h3>Available Skills:</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill.name}</strong> - {skill.skill} ({skill.description})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillSwapForm;
