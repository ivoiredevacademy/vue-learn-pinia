<script setup>
import {ref} from 'vue'
import {useTasksStore} from '../store/tasks';

console.log(useTasksStore);
</script>

<template>
  <div class="px-16 flex flex-col justify-center h-full">
    <h1 class="text-3xl font-semibold mb-10">Nouvelle tache</h1>
    <div class="mb-6">
      <input placeholder="Name" class="inline-flex w-full px-2 py-3 rounded-lg border-2 border-gray-300 focus:outline-none" />
    </div>
    <div class="mb-6">
      <textarea placeholder="Description of the task" class="inline-flex w-full px-3 py-4 rounded-lg border-2 border-gray-300
        focus:outline-none
      " rows="6"></textarea>
    </div>
    <div class="mb-6">
      <button class="bg-blue-700 text-white px-6 py-3 rounded ">Enregistrer</button>
    </div>
  </div>
  
</template>

<style scoped>

</style>
