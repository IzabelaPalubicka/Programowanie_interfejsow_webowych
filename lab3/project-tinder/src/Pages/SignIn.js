import { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import {logInWithFb, logInWithGoogle, logInWithGithub } from "../firebase/users";

let signOut = "false";

const SignIn = (props) => {

    const { usersList } = props;

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [info, setInfo] = useState("Enter details:");
    const [, setLogged] = useContext(UserContext);

    const [, setLoginCookie] = useLocalStorage("login", "");
    const [, setEmailCookie] = useLocalStorage("email", "");
    const [, setSignInCookie] = useLocalStorage("signIn", "");

    const [signIn, setSignIn] = useState("");

    useEffect(() => { 
        const data = window.localStorage.getItem('signIn');
        if(data !== null) setSignIn(JSON.parse(data));
    }, []);

    const handleLogin = (event) => {
        setLogin(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSignIn = () => {
        let user = {login: login,
                    email: email,
                    password: password}
        filterData(user);
    }

    const filterData = (value) => {
        
        const filteredData = usersList.filter(it => it.login === value.login
                                                    && it.email === value.email 
                                                    && it.password === value.password)
        if(filteredData != "")
        {
            setInfo("Sign in correctly.")
            console.log("Sign in correct.");
            let loggedUser = {  login: login,
                                email: email}
            setLogged(loggedUser);
            setLoginCookie(JSON.stringify(loggedUser.login));
            setEmailCookie(JSON.stringify(loggedUser.email));
            setSignInCookie(JSON.stringify("true"));
            signOut = "true";
            setLogin("");
            setEmail("");
            setPassword("");
            setInfo("Enter details:");
        }
        else
        {
            let loggedUser = {  login: "",
                                email: ""}
            setLogged(loggedUser);
            // localStorage.clear();
            setLoginCookie(JSON.stringify(loggedUser.login));
            setEmailCookie(JSON.stringify(loggedUser.email)); 
            setSignInCookie(JSON.stringify(""));
            setInfo("Wrong details.")
            console.log("Wrong details.");
        }
    }
      
    const signOutOperation = () => {
      let loggedUser = {  login: "",
                          email: ""}
      // localStorage.clear();
      setLoginCookie(JSON.stringify(loggedUser.login));
      setEmailCookie(JSON.stringify(loggedUser.email)); 
      setSignInCookie(JSON.stringify(""));
      setLogged(loggedUser);
      signOut = "false";
    }
    
    // if(JSON.parse(signIn) !== "" && signIn != null){
    if(signIn !== ""){
      if(JSON.parse(signIn) !== "")
      {
        console.log(signIn);
        return(
          <input className="btn" type="button" value="Sign out" onClick={signOutOperation} />
        );
      }
      else{
        return (
          <div className="App">
              <section className="adding">
                  <h3>{info}</h3>
                  <h5>Login:</h5>
                  <input type="login" value={login} onChange={handleLogin} />
                  <h5>Email:</h5>
                  <input type="email" value={email} onChange={handleEmail} />
                  <h5>Password:</h5>
                  <input type="password" value={password} onChange={handlePassword} />
              </section>
              <input className="btn" type="button" value="Sign in" onClick={handleSignIn} />
          </div>
        );
      }
    }
    else
    {
      return (
        <div className="App">
            <section className="adding">
                <h3>{info}</h3>
                <h5>Login:</h5>
                <input type="login" value={login} onChange={handleLogin} />
                <h5>Email:</h5>
                <input type="email" value={email} onChange={handleEmail} />
                <h5>Password:</h5>
                <input type="password" value={password} onChange={handlePassword} />
            </section>
            <input className="btn" type="button" value="Sign in" onClick={handleSignIn} />
            <button className="btn" onClick={logInWithGoogle}>
              Login with Google
            </button>
            <button className="btn" onClick={logInWithFb}>
              Login with FB
            </button>
            <button className="btn" onClick={logInWithGithub}>
              Login with Github
            </button>
        </div>
      );
    }
};

export default SignIn;

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}