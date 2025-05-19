import { saveToStorage, loadFromStorage } from './storage.js';

let todos = loadFromStorage();

export function addTodo(text) {
  const todo = {
    id: Date.now(),
    text,
    done: false,
  };
  todos.push(todo);
  saveToStorage(todos);
}

export function getTodos() {
  return todos;
}

export function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  saveToStorage(todos);
}

export function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveToStorage(todos);
}
