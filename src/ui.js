import { getTodos, toggleTodo, removeTodo } from './todo.js';

export function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = ''; // előző lista törlése

  const todos = getTodos();

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    li.style.textDecoration = todo.done ? 'line-through' : 'none';

    // toggle kattintásra
    li.addEventListener('click', () => {
      toggleTodo(todo.id);
      renderTodos(); // újrarajzolás
    });

    // delete gomb
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // ne toggle-öljön is
      removeTodo(todo.id);
      renderTodos();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
