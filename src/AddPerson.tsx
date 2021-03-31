
import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

export const AddPerson: React.FC = () => {

    const [age, setAge] = useState(0);
    const [name,setName] = useState("");

    const dispatch = useDispatch();

    const addPerson = () => {
        dispatch({
            type: "ADD_PERSON",
            payload: {name,age}
        })
    }

    const changeAge = (event: ChangeEvent<HTMLInputElement>) => {
        setAge(Number(event.target.value))
        // console.log(todo)
    }

    const changeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
        // console.log(todo)
    }

    return <div>
        <input onChange={changeName}></input>
        <input onChange={changeAge}></input>
        <button onClick={addPerson}>add person</button>'
    </div>
}