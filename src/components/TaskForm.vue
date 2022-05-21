<script setup>
import { v4 as uuid } from 'uuid'
import { ref } from 'vue'
import { useTasksStore } from '../store/tasks';

const name = ref('')
const description = ref('');
const taskStore = useTasksStore();

function handleFormSubmit() {
  taskStore.createNewTask({
    id: uuid(), name: name.value, description: description.value,
    completed: false
  });

  name.value = "";
  description.value = "";
}
</script>

<template>
  <form class="px-16 flex flex-col justify-center h-full" @submit.prevent="handleFormSubmit">
    <h1 class="text-3xl font-semibold mb-10">Nouvelle tache </h1>
    <div class="mb-6">
      <input
        v-model="name"
        placeholder="Name"
        class="inline-flex w-full px-2 py-3 rounded-lg border-2 border-gray-300 focus:outline-none"
      />
    </div>
    <div class="mb-6">
      <textarea
        v-model="description"
        placeholder="Description of the task"
        class="inline-flex w-full px-3 py-4 rounded-lg border-2 border-gray-300 focus:outline-none"
        rows="6"
      ></textarea>
    </div>
    <div class="mb-6">
      <button class="bg-blue-700 text-white px-6 py-3 rounded " type="submit">Enregistrer</button>
    </div>
  </form>

</template>

<style scoped>

</style>
