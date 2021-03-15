
import {  useDispatch } from "react-redux";
export interface todoState {
    todos: string[]
}

export interface userState {
    users: string[]
}


const intialState = { todos: [] };

const intialStateUsers = { users: [] };

export function mainReducer(state: todoState = intialState, action: addTodoType) {
    console.log("inside")
    if (action.type == "ADD_TODO") {
        console.log("hello")
        return { ...state, todos: [...state.todos, action.payload] }
    }

    return state;
}


export function usersReducer(state: userState = intialStateUsers, action: usersType) {
    console.log("inside get users")
    if (action.type == "GET_USERS") {
        console.log("get users")
        return { ...state, users: [...state.users, action.payload] }
    }

    return state;
}



type addTodoType = {
    type: string,
    payload: string
}

type usersType = {
    type: string,
    payload: string
}

export function callApi(dispatch:any) {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => dispatch({ type: "GET_USERS", payload: data }));
}
