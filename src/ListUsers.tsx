import { useSelector, useDispatch } from "react-redux";
import { toEditorSettings } from "typescript";
import { todoState, userState, } from "./mainreducer"
// import { callApi } from './mainreducer'

const ListUsers: React.FC = () => {



  const users = useSelector<userState, userState["users"]>(
    (state) => state.users
  );
  return <ul>{users.map(p => <li>{p}</li>)}</ul>


}

export default ListUsers;