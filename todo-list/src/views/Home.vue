<template>
  <Alert
    :message="alert.message"
    :show="alert.show"
    :variant="alert.variant"
    @close="alert.show = false"
  />

  <section>
    <Spinner v-if="isLoading" class="spinner"></Spinner>
    <div v-else>
      <Todo
        v-for="todo in todos"
        :title="todo.title"
        :description="todo.description"
        :date="todo.date"
        :key="todo.id"
        @remove="removeTodo(todo.id)"
        @edit="$router.push(`/todos/${todo.id}/edit`)"
      />
    </div>
  </section>
</template>

<script setup>
import Alert from "@/components/Alert.vue";
import Todo from "@/components/Todo.vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";
import { useFetch } from "@/composables/fetch";
import { useAlert } from "@/composables/alert";

const { alert, showAlert } = useAlert();

const { data: todos, isLoading } = useFetch("/api/todos", {
  onError: () => showAlert("Failed loading todos"),
});

async function removeTodo(id) {
  await axios.delete(`/api/todos/${id}`);
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<style scoped>
.spinner {
  margin: auto;
  margin-top: 30px;
}
</style>
