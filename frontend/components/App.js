import React from 'react'
import { ReactDOM } from 'react';

import TodoList from './TodoList';
import Form from './Form';

const todos = [
  {
    name: 'Walk Moo',
    id: 111,
    done: false,
  },
  {
    name: 'Study',
    id: 222,
    done: false,
  },
  {
    name: 'Pick up trash',
    id: 333,
    done: false,
  }
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleTodo = todoID => {
    console.log(todoID);
    this.setState({ ...this.state, todos: this.state.todos.map(todo => {
      if(todo.id === todoID) {
        return {...todos, done: !todos.done}
      }
      return todos;
    })})
  }

  addTodo = (e, todo) => {
    e.preventDefaults();
    const newTodo = {
      name: todo,
      id: Date.now(),
      done: false
    }
    this.setState({...this.state, todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h1>ToDo List</h1>
        <Form addTodo={this.addTodo} />
        </div>
        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} />
      </div>
    )
  }
}
