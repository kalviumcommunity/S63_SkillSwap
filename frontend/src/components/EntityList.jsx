import { useState } from "react";

const EntityList = ({ entities, setEntities }) => {
    const [editingEntity, setEditingEntity] = useState(null);
    const [editedName, setEditedName] = useState("");
    const [editedSkill, setEditedSkill] = useState("");

    const deleteEntity = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/entities/${id}`, { method: "DELETE" });
            setEntities(entities.filter((entity) => entity._id !== id));
        } catch (error) {
            console.error("Error deleting entity:", error);
        }
    };

    const startEditing = (entity) => {
        setEditingEntity(entity._id);
        setEditedName(entity.name);
        setEditedSkill(entity.skill);
    };

    const updateEntity = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/entities/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: editedName, skill: editedSkill }),
            });

            if (!response.ok) throw new Error("Failed to update entity");

            setEntities(
                entities.map((entity) =>
                    entity._id === id ? { ...entity, name: editedName, skill: editedSkill } : entity
                )
            );

            setEditingEntity(null);
        } catch (error) {
            console.error("Error updating entity:", error);
        }
    };

    return (
        <div className="entity-container">
            {entities.length > 0 ? (
                entities.map((entity) => (
                    <div key={entity._id} className="entity-item">
                        {editingEntity === entity._id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                    className="edit-input"
                                />
                                <input
                                    type="text"
                                    value={editedSkill}
                                    onChange={(e) => setEditedSkill(e.target.value)}
                                    className="edit-input"
                                />
                                <button onClick={() => updateEntity(entity._id)} className="save-btn">Save</button>
                                <button onClick={() => setEditingEntity(null)} className="cancel-btn">Cancel</button>
                            </>
                        ) : (
                            <>
                                <span className="entity-text">{entity.name} - {entity.skill}</span>
                                <button onClick={() => startEditing(entity)} className="edit-btn">Edit</button>
                                <button onClick={() => deleteEntity(entity._id)} className="delete-btn">Delete</button>
                            </>
                        )}
                    </div>
                ))
            ) : (
                <p className="no-entity">No entities found.</p>
            )}
        </div>
    );
};

export default EntityList;
