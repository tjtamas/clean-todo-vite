import './style.css';
import { addTodo } from './todo.js';
import { renderTodos } from './ui.js';

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    renderTodos();
  }
});

renderTodos(); // FONTOS: ez frissíti az UI-t induláskor!
