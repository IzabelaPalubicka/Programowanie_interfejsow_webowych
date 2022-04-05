import { useState } from "react";

let counter = 0;
let addMember = false;
let addGroup = true;

const AddGroup = (props) => {

    const { groupsList, setGroupList } = props;


    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newSubject, setNewSubject] = useState("");
    const [newMembersList, setNewMemberList] = useState([]);
    const [newMemberName, setNewMemberName] = useState("");
    const [newMemberEmail, setNewMemberEmail] = useState("");
    const [newMemberRole, setNewMemberRole] = useState("");
    const [memberAmount, setMemberAmount] = useState(1);

    const handleNewName = (event) => {
        setNewName(event.target.value);
    }
    const handleNewDescription = (event) => {
        setNewDescription(event.target.value);
    }
    const handleNewSubject = (event) => {
        setNewSubject(event.target.value);
    }
    const handleNewMemberName = (event) => {
        setNewMemberName(event.target.value);
    }
    const handleNewMemberEmail = (event) => {
        setNewMemberEmail(event.target.value);
    }
    const handleNewMemberRole = (event) => {
        setNewMemberRole(event.target.value);
    }
    const handleMemberAmount= (event) => {
        setMemberAmount(event.target.value);
    }

    const handleAddNewMember = () => {
        let newMember = {name: newMemberName,
            email: newMemberEmail,
            role: newMemberRole}
        setNewMemberList(newMembersList.concat([newMember]));
        counter = counter + 1;
        if(counter == memberAmount){
            addMember = true;
            addGroup = false;
        }
    }

    const handleAddNewGroup = () => {
        let newGroup = {name: newName,
            members: newMembersList,
            description: newDescription,
            subject: newSubject}
        setGroupList(groupsList.concat([newGroup]));
        counter = 0;
        addMember = false;
        addGroup = true;
    }

    const groupsListHTML = groupsList.map((it, i) => {
        return (
            <div className="group-box" key={i}>
                <p>Name: {it.name}</p>
                <p>Subject: {it.subject}</p>
                <p>Description: {it.description}</p>
                <div>{it.members.map((member, id) => {
                    return (
                        <div className="member" key={id}>
                            <p>Name: {member.name}</p>
                            <p>Role: {member.role}</p>
                        </div>
                    )}
                    )}
                </div>
            </div>
        );
    })

    return (
        <div className="App">
            <section className="adding">
                <div className="add-item">
                    <div className="add-group">
                        <h5>Group name:</h5>
                        <input type="text" value={newName} onChange={handleNewName} />
                        <h5>Subject:</h5>
                        <input type="text" value={newSubject} onChange={handleNewSubject} />
                        <h5>Project description:</h5>
                        <input type="text" value={newDescription} onChange={handleNewDescription} />
                        <h5>Members amount (1-5):</h5>
                        <input type="text" value={memberAmount} onChange={handleMemberAmount} />
                    </div>
                    <div className="add-member">
                        <h5>Member name:</h5>
                        <input type="text" value={newMemberName} onChange={handleNewMemberName} />
                        <h5>Member email:</h5>
                        <input type="text" value={newMemberEmail} onChange={handleNewMemberEmail} />
                        <h5>Member role:</h5>
                        <input type="text" value={newMemberRole} onChange={handleNewMemberRole} />
                        <input className="btn" type="button" disabled={addMember} value="Add member" onClick={handleAddNewMember} />
                        <h5>Provided {counter} members</h5>
                    </div>
                </div>
                <input className="btn" type="button" disabled={addGroup} value="Add group" onClick={handleAddNewGroup} />    
            </section>
            
            
            
            {groupsListHTML}
        </div>
    );
}

export default AddGroup;