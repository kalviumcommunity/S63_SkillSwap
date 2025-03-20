import { useState, useEffect } from "react";
import EntityList from "../components/EntityList";

const AddEntity = () => {
    const [entities, setEntities] = useState([]);
    const [formData, setFormData] = useState({ name: "", skill: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch entities from backend on component mount
    useEffect(() => {
        const fetchEntities = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/entities");
                if (!response.ok) throw new Error("Failed to fetch entities");

                const data = await response.json();
                setEntities(data);
            } catch (err) {
                setError("Error fetching entities.");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchEntities();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/entities", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to add entity");

            const newEntity = await response.json();
            setEntities([...entities, newEntity]);
            setFormData({ name: "", skill: "" }); // Reset form

        } catch (error) {
            setError("Error adding entity. Try again.");
            console.error("Error:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="title">Add a New Entity</h2>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="skill"
                    placeholder="Enter skill"
                    value={formData.skill}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="add-btn">Add Entity</button>
            </form>

            <h3 className="list-title">Entities List</h3>

            <EntityList entities={entities} setEntities={setEntities} />
        </div>
    );
};

export default AddEntity;
