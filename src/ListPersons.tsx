import { useSelector } from "react-redux";
import { toEditorSettings } from "typescript";
import { useDispatch } from 'react-redux'

import {callApi, IUser} from './mainreducer'


export function ListNames() {

    const dispatch = useDispatch();


    const bla = useSelector<IUser[], IUser[]>(
        (state) => state
    );

    const buttonHandler = () =>
    {
        console.log('hello')
        callApi(dispatch);
    }

    return (<div>
        
        <button onClick={()=>buttonHandler()}>get users</button>
        {bla.map(n => <div>{n.name}</div>)}</div>);
}