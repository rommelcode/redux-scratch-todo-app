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
import { AddPerson } from './AddPerson';
import {ListNames} from './ListPersons'

function App() {

  return (
    <div className="App">
      <AddPerson></AddPerson>

      <ListNames></ListNames>

    </div>
  );
}

export default App;
