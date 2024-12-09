export let todos = $state([]);
export function addTodo(todo) {
  todos.unshift(todo);
}
