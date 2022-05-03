import { useState } from "react";
const SignUp = (props) => {

    const { setUserList, usersList } = props;

    const [newLogin, setNewLogin] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [info, setInfo] = useState("Enter details:");
    const [searchUser, setSearchUser] = useState([]);


    const handleNewLogin = (event) => {
        setNewLogin(event.target.value);
    }

    const handleNewEmail = (event) => {
        setNewEmail(event.target.value);
    }

    const handleNewPassword = (event) => {
        setNewPassword(event.target.value);
    }

    const handleRepeatPassword = (event) => {
        setRepeatPassword(event.target.value);
    }

    const handleSignUp = () => {
        if(newPassword === repeatPassword)
        {
            let newUser =   {   login: newLogin,
                                email: newEmail,
                                password: newPassword}
            filterData(newUser);
            
            if(searchUser === ""){
                setUserList(usersList.concat([newUser]));
                setInfo("Sign up correct.");
                setNewLogin("");
                setNewEmail("");
                setNewPassword("");
                setRepeatPassword("");
                console.log("Sign up correct.")
            }
            else{
                setInfo("User exist. Enter other email or login.");
            }
        }
        else{
            setInfo("Wrong passwords.");
        }
    }

    const filterData = (value) => {    
        const filteredData = usersList.filter(it => it.login === value.login
                                                    || it.email === value.email)
        setSearchUser(filteredData);
    }

    return (
        <div className="App">
            <section className="adding">
                <h3>{info}</h3>
                <h5>Login:</h5>
                <input type="login" value={newLogin} onChange={handleNewLogin} />
                <h5>Email:</h5>
                <input type="email" value={newEmail} onChange={handleNewEmail} />
                <h5>Password:</h5>
                <input type="password" value={newPassword} onChange={handleNewPassword} />
                <h5>Repeat password:</h5>
                <input type="password" value={repeatPassword} onChange={handleRepeatPassword} />
            </section>
            <input className="btn" type="button" value="Sign up" onClick={handleSignUp} />
        </div>
    )
};

export default SignUp;