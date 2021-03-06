
import {Reducer} from 'redux';
import {  useDispatch } from "react-redux";
// export interface todoState {
//     todos: string[]
// }

// export interface post{
//     userId:number;
//     id: number;
//     title: string;
//     body: string;
// }

// export interface postState {
//     posts: string[]
// }

// const initialPostState = { posts: [] };

// export function postsReducer(state: postState = initialPostState, action: addTodoType) {
//     console.log("inside SET_POSTS reducer")
//     if (action.type == "SET_POSTS") {
//         console.log("SET_POSTS",action.payload)
//         return { ...state, posts: [...state.posts, action.payload] }
//     }
//     return state;
// }


//const initialState = { todos: [] };

// export function mainReducer(state: todoState = initialState, action: addTodoType) {
//     //console.log("inside")
//     if (action.type == "ADD_TODO") {
//         console.log("hello")
//         return { ...state, todos: [...state.todos, action.payload] }
//     }
//     return state;
// }

// const initialState = 12;

// export const todosReducer:Reducer<number>= (state = initialState, action) =>
// {
//     //console.log("inside")
//     if (action.type == "CHANGE_NUMBER") {
//         console.log("inside reducer")
//         return action.payload ;
//     }
//     return state;
// }

export interface IUser{
    name:string,
    userName:string
}
const initialState:IUser[] = [];

// export const todosReducer:Reducer<IPerson[]>= (state = initialState, action) =>
// {
//     console.log("inside reducer",action.payload)
//     if (action.type == "ADD_PERSON") {
//         console.log("inside reducer")
//         return  [...state,action.payload]
        
//     }
//     return state;
// }

export const usersReducer:Reducer<IUser[]>= (state = initialState, action) =>
{
    console.log("inside reducer",action.payload)
    if (action.type == "SET_USERS") {
        console.log("inside reducer")
        return  action.payload
        
    }
    return state;
}


// type addTodoType = {
//     type: string,
//     payload: string
// }


export function callApi(dispatch:any) {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => dispatch({type:"SET_USERS",payload: data}));
}



// export interface post{
//  posts:string[]
// }
