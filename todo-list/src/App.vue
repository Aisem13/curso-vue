<template>
  <Navbar />

  <main class="container">
    <Alert
      message="Todo title is required"
      :show="showAlert"
      @close="showAlert = false"
      type="danger"
    />
    <section>
      <AddTodoForm @submit="addTodo" />
    </section>

    <section>
      <Todo
        v-for="todo in todos"
        :title="todo.title"
        :key="todo.id"
        @remove="removeTodo(todo.id)"
      />
    </section>
  </main>
</template>

<script>
import AddTodoForm from "./components/AddTodoForm.vue";
import Alert from "./components/Alert.vue";
import Navbar from "./components/Navbar.vue";
import Todo from "./components/Todo.vue";

export default {
  data() {
    return {
      todoTitle: "",
      todos: [],
      showAlert: false,
    };
  },
  methods: {
    addTodo(title) {
      if (title === "") {
        this.showAlert = true;
        return;
      }
      this.todos.push({
        title,
        id: Math.floor(Math.random() * 1000),
      });
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  components: {Alert, Navbar, AddTodoForm, Todo},
};
</script>
