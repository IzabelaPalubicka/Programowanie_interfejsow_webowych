import './App.css';
import {useState, useEffect, useReducer} from 'react';
import Main from './Pages/Main';
import AddAd from './Pages/AddAd';
import AddGroup from './Pages/AddGroup';
import Fav from './Pages/Fav';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Logged from './Pages/Logged';
import SearchGroup from './Pages/SearchGroup';
import axios from 'axios';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import UserContext from './Context/UserContext';
import {ReducerContext, initState, reducer} from './Context/ReducerContext';

function App() {

  const [state, dispatcher] = useReducer(reducer, initState);

  const [studentsList, setStudentList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/tinder/students.json")
      .then(res => {
        const students = res.data;
        setStudentList(students);
        console.log("students");
      });
  }, []);

  const [groupsList, setGroupList] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/tinder/groups.json")
      .then(res => {
        const groups = res.data;
        setGroupList(groups);
        console.log("groups");
      });
  }, []);

  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/tinder/users.json")
      .then(res => {
        const users = res.data;
        setUserList(users);
        console.log("users");
      });
  }, []);

  return (
    <>
    <header>
      <h2>Project Tinder for students</h2>
    </header>
    <ReducerContext.Provider value={{ state, dispatcher }}>
    <UserContext.Provider value={useState("")}>
    <main>
      <BrowserRouter>
        <section className="navigation">
          <nav>
              <NavLink to="/">Main</NavLink>
              <NavLink to="/addAd">Add advertisement</NavLink>
              <NavLink to="/searchGroup">Search group</NavLink>
              <NavLink to="/addGroup">Add group</NavLink>
              <NavLink to="/fav">Fav: {state.counter}</NavLink>
              <NavLink to="/signIn">Sign in</NavLink>
              <NavLink to="/signUp">Sign up</NavLink>
              </nav>
          <Logged/>
        </section>
        <section className="subpages">
          <Routes>
            <Route path="/" element={<Main studentsList={studentsList} />}/>
            <Route path="/addAd" element={<AddAd studentsList={studentsList} setStudentList={setStudentList}/>} />
            <Route path="/searchGroup" element={<SearchGroup groupsList={groupsList}/>} />
            <Route path="/addGroup" element={<AddGroup groupsList={groupsList} setGroupList={setGroupList}/>} />
            <Route path="/fav" element={<Fav usersList={usersList}/>} />
            <Route path="/signIn" element={<SignIn usersList={usersList}/>} />
            <Route path="/signUp" element={<SignUp usersList={usersList} setUserList={setUserList}/>} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>
    </UserContext.Provider>
    </ReducerContext.Provider>
    </>
  );
}

export default App;
