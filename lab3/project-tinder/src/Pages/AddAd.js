import { useState } from "react";

const AddAd = (props) => {

    const { setStudentList, studentsList } = props;

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newTags, setNewTags] = useState("");
    const [newSubjects, setNewSubjects] = useState("");

    const handleNewName = (event) => {
        setNewName(event.target.value);
    }
    const handleNewEmail = (event) => {
        setNewEmail(event.target.value);
    }
    const handleNewDescription = (event) => {
        setNewDescription(event.target.value);
    }
    const handleNewTags = (event) => {
        setNewTags(event.target.value);
    }
    const handleNewSubjects = (event) => {
        setNewSubjects(event.target.value);
    }

    const handleAddNewItem = () => {
        let newStudent = {name: newName,
            email: newEmail,
            description: newDescription,
            tags: newTags,
            subject: newSubjects}
        setStudentList(studentsList.concat([newStudent]));
    }

    const studentsListHTML = studentsList.map((it, i) => {
        return (
            <div className="info-box" key={i}>
                <p>Name: {it.name}</p>
                <p>Description: {it.description}</p>
                <p>Tags: {it.tags}</p>
                <p>Subject: {it.subjects}</p>
            </div>
        );
    })

    return (
        <div className="App">
            <section className="adding">
                <div>
                    <h5>Name:</h5>
                    <input type="text" value={newName} onChange={handleNewName} />
                    <h5>Email:</h5>
                    <input type="text" value={newEmail} onChange={handleNewEmail} />
                    <h5>Description:</h5>
                    <input type="text" value={newDescription} onChange={handleNewDescription} />
                    <h5>Tags: </h5>
                    <input type="text" value={newTags} onChange={handleNewTags} />
                    <h5>Subject:</h5>
                    <input type="text" value={newSubjects} onChange={handleNewSubjects} />
                </div>
                <input className="btn" type="button" value="Add" onClick={handleAddNewItem} />
            </section>
            
        {studentsListHTML}
        </div>
    );
};

export default AddAd;