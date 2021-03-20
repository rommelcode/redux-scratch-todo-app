import { useSelector, useDispatch } from "react-redux";
import { toEditorSettings } from "typescript";
import { todoState } from "./mainreducer"
import { callApi } from './mainreducer'

const ListPosts: React.FC = () => {

  const dispatch = useDispatch();

  callApi(dispatch);

  // const users = useSelector<any, any>(
  //   (state) => state
  // );

  return (<div>nothing posts</div>)
  //return <ul>{users.map(p => <li>{p.name}</li>)}</ul>


}

export default ListPosts;