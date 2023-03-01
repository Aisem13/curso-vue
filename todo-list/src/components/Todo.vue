<template>
  <div class="todo">
    <p>{{ title }}</p>
    <P>{{ description }}</P>
    <P>{{ date }}</P>
    <div>
      <Btn circle variant="secondary" @click.prevent="edit" class="btn edit-todo-btn"><Pencil /></Btn>
      <Btn circle variant="danger" @click.prevent="remove" class="btn">&times;</Btn>
    </div>
  </div>
</template>

<script setup>
import Btn from "./Btn.vue";
import Pencil from "./icons/Pencil.vue";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
});

const emit = defineEmits(["remove","edit"]);

function remove() {
  emit('remove');
}

function edit() {
  emit('edit');
}

</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--accent-color);
  margin-top: 30px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
}

.todo > div {
  display: flex;
}

.edit-todo-btn {
  margin-right: 5px;
}

.btn {
  height: 40px;
  width: 40px;
  font-size: 30px;
}
</style>
