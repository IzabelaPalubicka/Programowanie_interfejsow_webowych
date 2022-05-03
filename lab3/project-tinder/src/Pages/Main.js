import { useState, useEffect, useContext} from "react";
import {ReducerContext} from '../Context/ReducerContext';
const Main = (props) => {

    const { studentsList } = props;

    const {state, dispatcher} = useContext(ReducerContext);

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(studentsList);

    const excludeColumns = ['name', 'email'];

    const handleSearch = (event) => {
        setSearchText(event.target.value);
        filterData(event.target.value)
    }

    useEffect(() => { setData(studentsList) }, [studentsList]);

    const filterData = (value) => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue) {
            setData(studentsList);
        }
        else {
            const filteredData = studentsList.filter((it) => {
                return Object.keys(it).some(key => {
                return excludeColumns.includes(key) ? false : it[key].toString().toLowerCase().includes(lowerCaseValue);
            })
        });
            setData(filteredData);
        }
    }

    const studentsListHTML = data
        .map((it, i) => {
            return (
                <div className="box" key={i}>
                    <img className="student-picture" src="https://random-memer.herokuapp.com" alt="profile picture"/>
                    <div className="student-info">
                        <p>Name: {it.name}</p>
                        <p>Subject: {it.subjects}</p>
                        <p>Description: {it.description}</p>
                        <p>Tags: {it.tags}</p> 
                    </div>
                    <div>
                        <input className="btn" type="button" value="Add fav" onClick={()=>dispatcher({type: "set_fav", payload: it})}/>
                        <input className="btn" type="button" value="Delete fav" onClick={()=>dispatcher({type: "delete_fav", payload: it})} />
                    </div>
                </div>
            );
        });

    return (
        <div className="App">
            <input type="text" placeholder="Type to search.." value={searchText} onChange={handleSearch} />
            {data.length === 0 && <span>No records found!</span>}
        {studentsListHTML}
        </div>
    );
};

export default Main;