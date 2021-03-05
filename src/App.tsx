import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AddTodo} from './AddTodo'
import {ListTodo} from './ListTodo'

function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <ListTodo></ListTodo>
    </div>
  );
}

export default App;
