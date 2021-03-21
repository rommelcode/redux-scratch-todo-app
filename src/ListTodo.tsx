import { useSelector } from "react-redux";
import { toEditorSettings } from "typescript";


export function ListTodo(){
    const bla = useSelector<number, number>(
        (state) => state
      );

 return (<div>{bla}</div>);
}