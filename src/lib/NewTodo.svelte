<script>
  import { addTodo } from "./store/todos.svelte";
  let title =$state('')
  function onsubmit(event){
    event.preventDefault()
    if(!title) return
    addTodo({
        title,
        completed:false,
        id: Date.now()
    })
    title=''
  }
</script>

<form {onsubmit}>
  <input type="text" bind:value={title} />
  <button disabled={!title}>Add</button>
</form>
