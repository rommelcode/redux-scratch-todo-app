
import {  useDispatch } from "react-redux";
export interface todoState {
    todos: string[]
}

export interface post{
    userId:number;
    id: number;
    title: string;
    body: string;
}

export interface postState {
    posts: post[]
}

const initialPostState = { posts: [] };

export function postsReducer(state: postState = initialPostState, action: addTodoType) {
    console.log("inside SET_USERS reducer")
    if (action.type == "SET_USERS") {
        console.log("SET_USERS")
        return { ...state, posts: [...state.posts, action.payload] }
    }
    return state;
}


const initialState = { todos: [] };

export function mainReducer(state: todoState = initialState, action: addTodoType) {
    console.log("inside")
    if (action.type == "ADD_TODO") {
        console.log("hello")
        return { ...state, todos: [...state.todos, action.payload] }
    }
    return state;
}


type addTodoType = {
    type: string,
    payload: string
}


export function callApi(dispatch:any) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => dispatch({type:"SET_USERS",payload: data}));
}



// export interface post{
//  posts:string[]
// }
