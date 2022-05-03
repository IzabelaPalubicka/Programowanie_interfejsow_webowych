import {useContext} from "react";
import { ReducerContext } from "../Context/ReducerContext";

const Fav = () => {
    const {state} = useContext(ReducerContext);
    
    const favListHTML = state.students.map((it, i) => {
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
        <>
            <h3> Amount of students in fav: {state.counter}</h3>
            {favListHTML}
        </>
    );
}

export default Fav;
