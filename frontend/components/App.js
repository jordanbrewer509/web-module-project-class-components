import React from 'react'
import { ReactDOM } from 'react';

import TaskList from './TodoList';
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

  toggleTask = taskID => {
    console.log(taskID);
    this.setState({ ...this.state, todos: this.state.todos.map(item => {
      if(task.id === taskID) {
        return {...task, done: !task.done}
      }
      return task;
    })})
  }

  addTask = (e, task) => {
    e.preventDefaults();
    const newTask = {
      name: task,
      id: Date.now(),
      done: false
    }
    this.setState({...this.state, todos: [...this.state.todos, newTask]})
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h1>ToDo List</h1>
        <Form addItem={this.addItem} />
        </div>
        <TaskList toggleTask={this.toggleTask} todos={this.state.todos} />
      </div>
    )
  }
}
