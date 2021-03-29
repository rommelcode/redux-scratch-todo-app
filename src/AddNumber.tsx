
import {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux'

export const AddNumber : React.FC = () => {

    const [item,setItem] = useState("");

    const dispatch = useDispatch();

    const addNumber = () =>{
        dispatch({
            type:"ADD_NUMBER",
            payload:item
        })
    }
    
    const changeNumber = (event: ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value)
       // console.log(todo)
    }

    return <div>
        <input onChange={changeNumber}></input><button onClick={addNumber}>Add number</button>
    </div>
}