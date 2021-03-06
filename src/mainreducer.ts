
const intialState ={todos:[]};

function mainReducer(state =intialState,action:addTodoType){
    console.log("inside")
    if (action.type == "ADD_TODO"){
        console.log("hello")
        return {...state,todos:[state.todos,action.payload]}
    }
  
    return state;
}

export default mainReducer

type addTodoType ={
    type:string,
    payload: string

}