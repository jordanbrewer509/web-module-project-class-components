import React from 'react';
import Task from './Todo';

const TaskList = (props) => {
    return (
      <div className='task-list'>
        {props.todos.map((task) => (
          <Task toggleTask={props.toggleTask} key={task.id} task={task} />
        ))}
      </div>
    );
};

export default TaskList;