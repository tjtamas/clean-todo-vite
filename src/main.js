import { addTodo, getTodos, toggleTodo, removeTodo } from './todo.js';

addTodo('Learn Vite!');
addTodo('Write ToDo logic');
console.log('All todos:', getTodos());

toggleTodo(getTodos()[0].id);
console.log('After toggle:', getTodos());

removeTodo(getTodos()[0].id);
console.log('After removal:', getTodos());
