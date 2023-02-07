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
    this.setState({ ...this.state, task: e.target.value })
  }

  submitForm = (e) => {
    e.preventDefault();
    this.addTask(e, this.state.task);
    this.setState({ ...this.state, task: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" name="task" value={this.state.task} onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    )
  }
}

export default Form;