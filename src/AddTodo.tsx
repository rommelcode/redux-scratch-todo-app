
import {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux'

export const AddTodo : React.FC = () => {

    const [todo,setTodo] = useState("");

    const dispatch = useDispatch();
    
    const changeTodo = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setTodo(event.target.value)
    }

    return <div>
        <input onChange={changeTodo}></input>
    </div>
}