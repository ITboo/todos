<script lang="ts">
type Todo = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
}
const DEFAULT_TODO = {
  title: '',
  description: '',
}

export default {
  data() {
    return {
      todo: { ...DEFAULT_TODO },
      todos: [
        { id: 1, title: 'Watch video about Vue', description: 'blah-blah-blah', checked: false },
        { id: 2, title: 'Create app', description: 'kinda funny', checked: false },
        { id: 3, title: 'Update info', description: 'use google to get more data', checked: false }]
    }
  },
  methods: {
    addTodo(todo: Omit<Todo, 'id' | 'checked'>) {
      this.todos.push({ id: this.todos.length + 1, checked: false, ...todo })
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    onSubmit() {
      this.addTodo(this.todo);
      this.todo = { ...DEFAULT_TODO };
    }
  }
}
</script>

<template>
  <h1>ToDo app (Option API)</h1>
  <form class="" @submit.prevent="onSubmit">
    <input type="text" v-model="todo.title" placeholder="title">
    <input type="text" v-model="todo.description" placeholder="description">
    <button type="submit">Add</button>

  </form>

  <ul v-for="todo in todos" :key="todo.id" v-if="todos.length" class="list">
    <li class="list-item">
      <div :class="{ checked: todo.checked }" class=" wrapper">
        <input type="checkbox" v-model="todo.checked">
        <div class="">
          <h2>{{ todo.title }}</h2>
          <p>{{ todo.description }}</p>
        </div>
      </div>
      <span @click="deleteTodo(todo.id)">x</span>
    </li>
  </ul>
  <h2 v-else>No todos there</h2>
</template>

<style scoped>
.list {
  list-style: none;
}
.list-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}

.checked {
  text-decoration: line-through;
}
</style>
