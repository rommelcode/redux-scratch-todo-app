import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTodo } from './AddTodo'
import { ListTodo } from './ListTodo'
import ListUsers from './ListUsers';
import ListPosts from './ListPosts'
import { useDispatch } from 'react-redux'
import { AddNumber } from './AddNumber'
import { ListNumbers } from './ListNumbers'

function App() {

  return (
    <div className="App">
      <AddNumber></AddNumber>
      <ListNumbers />

    </div>
  );
}

export default App;
