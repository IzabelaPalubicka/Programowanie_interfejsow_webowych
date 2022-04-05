import { useState } from "react";

const Main = (props) => {

    const { studentsList } = props;

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(studentsList);

    const excludeColumns = ['name', 'email'];

    const handleSearch = (event) => {
        setSearchText(event.target.value);
        filterData(event.target.value)
    }

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
                    <p>Name: {it.name}</p>
                    <p>Subject: {it.subjects}</p>
                    <p>Description: {it.description}</p>
                    <p>Tags: {it.tags}</p> 
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