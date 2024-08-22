import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      showCompleted: true // Toggle to show/hide completed todos
    };
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = () => {
    fetch(URL)
      .then(res => res.json())
      .then(newTodo => this.setState(prevState => ({
        todos: [...prevState.todos, newTodo]
      })))
      .catch(err => console.error('Error adding todo:', err));
  };

  toggleTodo = (id) => {
    fetch(`${URL}/${id}`, { method: 'PATCH' })
      .then(res => res.json())
      .then(updatedTodo => this.setState(prevState => ({
        todos: prevState.todos.map(todo =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      })))
      .catch(err => console.error('Error toggling todo:', err));
  };

  clearCompleted = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => !todo.completed)
    }));
  };

  toggleShowCompleted = () => {
    this.setState(prevState => ({
      showCompleted: !prevState.showCompleted
    }));
  };

  render() {
    const { todos, showCompleted } = this.state;
    const filteredTodos = showCompleted ? todos : todos.filter(todo => !todo.completed);

    return (
      <div>
        <Form
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          toggleShowCompleted={this.toggleShowCompleted}
        />
        <TodoList
          todos={filteredTodos}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}
