import './App.css';
import {useState} from 'react';
import Main from './Pages/Main';
import AddAd from './Pages/AddAd';
import AddGroup from './Pages/AddGroup';
import SearchGroup from './Pages/SearchGroup';

import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'

function App() {

  // var student1 = {name: "Jan Nowak", describe: "hardworking", tags: "docer"};
  // var student2 = {name: "Ala Kowalska", describe: "ambitious", tags: "webdev, frontend"};

  // const [studentsList, setStudentList] = useState(["Sprawdzić zadania", "Wpisać oceny", "uwalić paru Studentów"]);
  const [studentsList, setStudentList] = useState([
    {name: "Jan Nowak", email: "jan.nowak@gmail.com", description: "hardworking", tags: "docer", subjects: "fullstack"},
    {name: "Alicja Kowalska", email: "ala.kowalska@gmail.com", description: "ambitious", tags: "webdev, frontend", subjects: "PIWo"}]);

  const [groupsList, setGroupList] = useState([
    {name: "Geeks", members: [{name: "Jan Kowalski", role:"frontend", email: "jan.kowalski@gmail.com"}, {name: "Ala Nowak", role:"backend", email: "ala.nowak@gmail.com"}], description: "hospital website", subject: "fullstack"},
    {name: "Nerds", members: [{name: "Adam Kowalski", role:"react", email: "adam.kowalski@gmail.com"}, {name: "Ania Nowak", role:"DB", email: "ania.nowak@gmail.com"}], description: "bank website", subject: "piwo"}]);
  
  

  return (
    <>
    <header>
      <h2>Project Tinder for students</h2>
    </header>
    <main>
      <BrowserRouter>
        <section className="navigation">
          <nav>
              <NavLink to="/">Main</NavLink>
              <NavLink to="/addAd">Add advertisement</NavLink>
              <NavLink to="/searchGroup">Search group</NavLink>
              <NavLink to="/addGroup">Add group</NavLink>
          </nav>
        </section>
        <section className="subpages">
          <Routes>
            <Route path="/" element={<Main studentsList={studentsList} />}/>
            <Route path="/addAd" element={<AddAd studentsList={studentsList} setStudentList={setStudentList}/>} />
            <Route path="/searchGroup" element={<SearchGroup groupsList={groupsList}/>} />
            <Route path="/addGroup" element={<AddGroup groupsList={groupsList} setGroupList={setGroupList}/>} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>
    </>
  );
}

export default App;
