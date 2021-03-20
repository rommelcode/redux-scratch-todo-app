import { useSelector, useDispatch } from "react-redux";
import { toEditorSettings } from "typescript";
import { todoState } from "./mainreducer"
import { callApi } from './mainreducer'

const ListPosts: React.FC = () => {

  const dispatch = useDispatch();

  callApi(dispatch);

  const posts = useSelector<any, any>(
    (state) => state.posts
  );

  return (<div>nothing posts</div>)
  //return <ul>{posts.map((p) => <li>{p.name}</li>)}</ul>


}

export default ListPosts;