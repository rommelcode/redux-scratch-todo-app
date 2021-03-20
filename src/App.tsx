import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AddTodo} from './AddTodo'
import {ListTodo} from './ListTodo'
import ListUsers  from './ListUsers';

import {useDispatch} from 'react-redux'
import {callApi} from './mainreducer'

function App() {
 
  return (
    <div className="App">
      <AddTodo></AddTodo>
  
      <ListUsers></ListUsers>
    </div>
  );
}

export default App;
