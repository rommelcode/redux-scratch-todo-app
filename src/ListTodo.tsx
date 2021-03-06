import { useSelector } from "react-redux";
import { toEditorSettings } from "typescript";
import {todoState} from "./mainreducer"

export function ListTodo(){
    const todos = useSelector<todoState, todoState["todos"]>(
        (state) => state.todos
      );
    return <ul>{todos.map(p => <li>{p}</li>)}</ul>
}