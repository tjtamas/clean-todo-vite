import { getTodos, toggleTodo, removeTodo } from './todo.js';

export function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  const todos = getTodos();

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.text;

    // Stílusos pipálás class alapján
    if (todo.done) {
      li.classList.add('done');
    }

    // toggle kattintásra
    li.addEventListener('click', () => {
      toggleTodo(todo.id);
      renderTodos();
    });

    // delete gomb
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeTodo(todo.id);
      renderTodos();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
