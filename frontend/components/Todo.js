import React from 'react'

export default class Todo extends React.Component {
  // Method to handle click events and toggle completion
  handleClick = () => {
    const { todo, toggleTodo } = this.props;
    // Call the function to toggle the todo's completion status
    toggleTodo(todo.id);
  };

  render() {
    const { todo } = this.props;
    return (
      <div
        onClick={this.handleClick}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          padding: '8px',
          border: '1px solid #ccc',
          marginBottom: '4px'
        }}
      >
        {todo.name}
      </div>
    );
  }
}
