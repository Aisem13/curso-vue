<template>
  <Spinner class="spinner" v-if="isPostingTodo" />

  <Alert variant="danger" :message="alert.message" :show="alert.show" />

  <div class="form">
    <form class="add-todo-form">
      <label>Todo Title</label>
      <input v-model="todoTitle" type="text" placeholder="Todo Title" />
      <label>Todo Description</label>
      <input
        v-model="todoDescription"
        type="text"
        placeholder="Todo Description"
      />
      <label>Todo Date</label>
      <input v-model="todoDate" type="date" placeholder="Todo Date" />
    </form>
    <div class="submit">
      <Btn :disabled="isPostingTodo" class="btn" @click="addTodo">
        <Spinner v-if="isPostingTodo"></Spinner>
        <span v-else>Add Todo</span>
      </Btn>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Btn from "../components/Btn.vue";
import Spinner from "../components/Spinner.vue";
import Alert from "../components/Alert.vue";
import axios from "axios";
import { useRouter } from "vue-router";

const todoTitle = ref("");
const todoDescription = ref("");
const todoDate = ref("");
const isPostingTodo = ref(false);
const alert = reactive({ message: "", show: false });

const router = useRouter();

async function addTodo() {
  if (todoTitle.value === "" || todoDescription.value === "" || todoDate.value === "") {
    alert.show = true;
    alert.message = "All Todo is required";
    return;
  }
  isPostingTodo.value = true;
  try {
    const title = todoTitle.value;
    const description = todoDescription.value;
    const date = todoDate.value;
    await axios.post("/api/todos", { title , description, date });
    router.push("/");
  } catch (e) {
    alert.show = true;
    alert.message = "Failed insert todo";
  }
  isPostingTodo.value = false;
}
</script>

<style scoped>
.form {
  background-color: var(--navbar-color);
  padding: 20px;
  border-radius: 10px;
}

.add-todo-form > input {
  width: 100%;
  height: 30px;
  border: 1px solid var(--accent-color);
  margin-bottom: 20px;
}
.submit {
  margin-top: 20px;
  display: flex;
  justify-content: end;
}

.submit button {
  height: 50px;
  width: 80px;
}

.spinner {
  margin: auto;
}
</style>
