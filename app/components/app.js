import React from 'react';
import AddTodo from './add-todo';
import TodoListContainer from './todo-list-container';
import Footer from './footer';

const App = () => (
  <div>
    <AddTodo />
    <TodoListContainer />
    <Footer />
  </div>
);

export default App;