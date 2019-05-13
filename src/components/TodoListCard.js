import React from 'react';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem.js'

function TodoListCard({ todos, removeItem, checked, toggleItem }) {
  if (!todos) {
    return null;
  }
  if (!todos.length) {
    return (
      <div>
        <p>You have no Todos.</p>
      </div>
    );
  }
  return (
    <List>
      {todos.map(todo => <TodoItem key={todo.id} id = {todo.id} todo={todo.title} desc= {todo.description} delete={removeItem} checked={checked} toggleItem ={toggleItem}/>)}
    </List>
  );
}

export default TodoListCard;
