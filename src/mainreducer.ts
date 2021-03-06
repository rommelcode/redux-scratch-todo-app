

export interface todoState{
    todos:string[]
}

const intialState ={todos:[]};

function mainReducer(state:todoState = intialState,action:addTodoType){
    console.log("inside")
    if (action.type == "ADD_TODO"){
        console.log("hello")
        return state;
        return {...state,todos:[...state.todos,action.payload]}
    }
  
    return state;
}

export default mainReducer

type addTodoType ={
    type:string,
    payload: string

}