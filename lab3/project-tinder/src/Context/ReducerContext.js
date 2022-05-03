import { createContext } from "react";

export const ReducerContext = createContext([{}, ()=>{}]);

export const initState = {
    counter: 0,
    students: []
}


export const reducer = (state, action) => {
    const {type, payload} = action;
    let idAlreadyExists = state.students.indexOf(payload) > -1;
    let students = state.students.slice();
    let counter = state.counter;
    switch(type){
        case "set_fav":             
            if(!idAlreadyExists) {
                students.push(payload); 
                counter = counter + 1;              
            }
            return {...state, counter, students};
        case "delete_fav": 
            if(idAlreadyExists) {
                students = students.filter(it => it !== payload);
                counter = counter - 1;                 
            }
            return {...state, counter, students};
        default:
            console.error(`Incorrect action type ${type}`)
    }
    return state;
}