import {useContext, useEffect, useState} from "react";
import UserContext from "../Context/UserContext";

const Logged = () => {

    const [user] = useContext(UserContext);
    const [login, setLogin] = useState("");

    useEffect(() => { 
        const data = window.localStorage.getItem('login');
        if(data !== null) setLogin(JSON.parse(data));
    }, []);

    if(user.login != null && user.login != "")
    { 
        return <span>User:  {user.login}</span>;
    }
    else if(login !== ""){
        if(JSON.parse(login) !== "")
        return <span>Hello {JSON.parse(login)}</span>;
    }
};

export default Logged;