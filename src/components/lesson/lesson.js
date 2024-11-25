import React, { useState, useEffect } from "react";

const Lessons = () => {
    const [lessons, setLessons] = useState([]);
    const [newLesson, setNewLesson] = useState({
        id: "",
        experiment_number: "",
        chapter: "",
        title: "",
        date: "",
        description: "",
        image: ""
    });
    const [editLesson, setEditLesson] = useState(null);

    useEffect(() => {
        fetchLessons();
    }, []);

    async function fetchLessons() {
        const response = await fetch("http://localhost:8080/mycrohowto");
        const data = await response.json();
        setLessons(data);
    }

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8080/mycrohowto/${id}`, {
            method: "DELETE"
        });
        fetchLessons();
    };

    const handleEdit = (lesson) => {
        setEditLesson(lesson);
        setNewLesson(lesson);
    };

    const handleSave = async () => {
        if (editLesson) {
            await fetch(`http://localhost:8080/mycrohowto/${editLesson.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newLesson)
            });
        } else {
            await fetch("http://localhost:8080/mycrohowto", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newLesson)
            });
        }
        setEditLesson(null);
        setNewLesson({
            id: "",
            experiment_number: "",
            chapter: "",
            title: "",
            date: "",
            description: "",
            image: ""
        });
        fetchLessons();
    };

    return (
        <>
            <div>
                {lessons.map((lesson) => (
                    <div key={lesson.id}>
                        {/* <img src={lesson.image} alt={lesson.title} /> */}
                        <p>Experiment Number: {lesson.experiment_number}</p>
                        <p>Chapter: {lesson.chapter}</p>
                        <p>Title: {lesson.title}</p>
                        <p>Date: {lesson.date}</p>
                        <p>Description: {lesson.description}</p>
                        <button onClick={() => handleEdit(lesson)}>Edit</button>
                        <button onClick={() => handleDelete(lesson.id)}>Delete</button> 
                    </div>
                ))}
            </div>
            {editLesson && (
                <div>
                    <input type="text" value={newLesson.experiment_number} onChange={(e) => setNewLesson({ ...newLesson, experiment_number: e.target.value })} placeholder="Experiment Number" />
                    <input type="text" value={newLesson.chapter} onChange={(e) => setNewLesson({ ...newLesson, chapter: e.target.value })} placeholder="Chapter" />
                    <input type="text" value={newLesson.title} onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })} placeholder="Title" />
                    <input type="text" value={newLesson.date} onChange={(e) => setNewLesson({ ...newLesson, date: e.target.value })} placeholder="Date" />
                    <input type="text" value={newLesson.description} onChange={(e) => setNewLesson({ ...newLesson, description: e.target.value })} placeholder="Description" />
                    <input type="text" value={newLesson.image} onChange={(e) => setNewLesson({ ...newLesson, image: e.target.value })} placeholder="Image URL" />
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </>
    );
};

export default Lessons;
