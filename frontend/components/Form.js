import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with an empty todo value
    this.state = {
      newTodo: '',
    };
  }

  // Method to handle changes in the input field
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  // Method to handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    // Call the addTodo function passed from parent component
    if (this.state.newTodo.trim()) {
      this.props.addTodo(this.state.newTodo);
      this.setState({ newTodo: '' }); // Clear the input field
    }
  };

  // Method to handle clearing completed todos
  handleClearCompleted = () => {
    this.props.clearCompleted();
  };

  render() {
    return (
      <div>
        {/* Form for adding new todos */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder="Enter new todo"
          />
          <button type="submit">Add Todo</button>
        </form>
        {/* Button to clear completed todos */}
        <button onClick={this.handleClearCompleted}>Clear Completed</button>
      </div>
    );
  }
}
