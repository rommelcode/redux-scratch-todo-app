import { useSelector } from "react-redux";
import { toEditorSettings } from "typescript";


export function ListNumbers() {
    const bla = useSelector<number[], number[]>(
        (state) => state
    );

    return (<div>{bla.map(n => <div>{n}</div>)}</div>);
}