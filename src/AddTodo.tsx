
import {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux'

export const AddTodo : React.FC = () => {

    const [todo,setTodo] = useState("");

    const dispatch = useDispatch();

    const addTodo = () =>{
        dispatch({
            type:"CHANGE_NUMBER",
            payload:todo
        })
    }
    
    const changeTodo = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
        console.log(todo)
    }

    return <div>
        <input onChange={changeTodo}></input><button onClick={addTodo}>Add todo</button>
    </div>
}