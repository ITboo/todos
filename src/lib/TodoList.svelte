<script>
  import { todos } from "./store/todos.svelte";
  import Todo from "./Todo.svelte";

  function removeTodo(todoId) {
    const todoIdx = todos.findIndex((todo) => todo.id === todoId);
    todos.splice(todoIdx, 1);
  }
</script>

<h1>Todos</h1>
{#if todos.length===0}
<h3>No todos for you</h3> 
{/if}

<div class="todos">
  {#each todos as todo (todo.id)}
    <Todo {...todo} {removeTodo}/>
  {/each}
</div>
<h2>Total: {todos.length}</h2>
