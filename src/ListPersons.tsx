import { useSelector } from "react-redux";
import { toEditorSettings } from "typescript";

import {IPerson} from './mainreducer'


export function ListNames() {
    const bla = useSelector<IPerson[], IPerson[]>(
        (state) => state
    );

    return (<div>{bla.map(n => <div>{n.name}</div>)}</div>);
}