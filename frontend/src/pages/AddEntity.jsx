import { useState, useEffect } from "react";

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
        <div style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}>
            <h2>Add a New Entity</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                <button type="submit">Add Entity</button>
            </form>

            <h3>Entities List</h3>

            {loading ? <p>Loading entities...</p> : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {entities.length > 0 ? (
                        entities.map((entity) => (
                            <li key={entity._id} style={{ margin: "5px 0", padding: "10px", border: "1px solid #ccc" }}>
                                {entity.name} - {entity.skill}
                            </li>
                        ))
                    ) : (
                        <p>No entities found.</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default AddEntity;
