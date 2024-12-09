<script>
  let { id, completed, title, removeTodo } = $props();
</script>

<div class="todo" class:completed>
  <h2>{title}</h2>
  <div class="check">
    <input type="checkbox" bind:checked={completed} />
    <p>{completed ? "Completed" : "Not completed"}</p>
  </div>
  <button
    onclick={() => {
      console.log(`delete ${id}`)
      removeTodo(id);
    }}>Delete</button
  >
</div>

<style>
  .todo {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid darkgrey;
    border-radius: 4px;
  }
  .check {
    display: flex;
    gap: 10px;
  }
  .completed {
    text-decoration: line-through;
  }
</style>
