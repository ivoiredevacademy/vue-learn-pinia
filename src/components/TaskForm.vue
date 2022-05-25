<script setup>
import { v4 as uuid } from 'uuid'
import { ref } from 'vue'
import { useTasksStore } from '../store/tasks';

const name = ref('')
const description = ref('');
const taskStore = useTasksStore();

function handleFormSubmit() {
  const task = {
      id: taskStore.selectedTask ? taskStore.selectedTask.id : uuid(),
      name: name.value,
      description: description.value,
      completed: false
  };

  if(taskStore.selectedTask) {
      taskStore.selectedTask = null;
  }

  taskStore.createTask(task);

  _clearForm();
}

function _clearForm() {
    name.value = "";
    description.value = "";
}

function cancelUpdate() {
    taskStore.createTask(taskStore.selectedTask);
    taskStore.selectedTask = null;
}

taskStore.$subscribe((mutation) => {
    const selectedTask = mutation.events.target.selectedTask;

    if(selectedTask) {
        name.value = selectedTask.name;
        description.value = selectedTask.description;
    }
});
</script>

<template>
  <form class="px-16 flex flex-col justify-center h-full" @submit.prevent="handleFormSubmit">
    <h1 class="text-3xl font-semibold mb-10">
        {{ taskStore.selectedTask ? "Modifier tache" : "Nouvelle tache" }}
    </h1>
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
      <button class="bg-blue-100 text-blue-600 font-semibold px-6 py-3 rounded mr-2" type="submit">
          {{ taskStore.selectedTask ? "Mettre à jour" : "Créer" }}
      </button>
      <button
          v-if="taskStore.selectedTask"
          class="bg-red-100 text-red-600 px-6 py-3 rounded font-semibold "
          @click="cancelUpdate"
      >
        Annuler
      </button>
    </div>
  </form>

</template>

<style scoped>

</style>
