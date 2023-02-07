import React from 'react'

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, todo: e.target.value })
  }

  submitForm = (e) => {
    e.preventDefault();
    this.addTodo(e, this.state.todo);
    this.setState({ ...this.state, todo: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" name="todo" value={this.state.todo} onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    )
  }
}

export default Form;