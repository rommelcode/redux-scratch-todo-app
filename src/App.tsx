import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AddTodo} from './AddTodo'
import {ListTodo} from './ListTodo'
import ListUsers  from './ListUsers';
import ListPosts from './ListPosts'
import {useDispatch} from 'react-redux'
import {callApi} from './mainreducer'

function App() {
 
  return (
    <div className="App">
      <AddTodo></AddTodo>
  
      <ListPosts></ListPosts>
    </div>
  );
}

export default App;
