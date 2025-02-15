import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
      <div className='task-list'>
        {props.todos.map((todo) => (
          <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
        ))}
      </div>
    );
};

export default TodoList;