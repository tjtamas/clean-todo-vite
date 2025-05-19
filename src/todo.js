let todos = [];

export function addTodo(text) {
  const todo = {
    id: Date.now(),
    text,
    done: false,
  };
  todos.push(todo);
}

export function getTodos() {
  return todos;
}

export function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
}

export function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
}
