import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AddTodo} from './AddTodo'
import {ListTodo} from './ListTodo'
import ListUsers  from './ListUsers';

import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  
  
 // callApi(dispatch)
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <ListTodo></ListTodo>
      <ListUsers></ListUsers>
    </div>
  );
}

export default App;
