<script setup>
import { useTasksStore } from '../store/tasks';
import { storeToRefs } from 'pinia';

const { tasks } = storeToRefs(useTasksStore());
</script>

<template>
  <div class="py-6">
    <h1 class="text-4xl mt-10 mb-4">Taches</h1>
    <div>
      <div
        class="bg-white rounded-lg flex px-4 py-4 mb-4"
        v-for="task in tasks"
        :key="task.id"
      >
        <div class="relative mr-2">
          <div class="round mr-2">
            <input type="checkbox" :id="task.id" />
            <label :for="task.id"></label>
          </div>
        </div>
        <div class="pl-4 w-full">
          <span class="text-xl font-semibold">{{ task.name }}</span>
          <p class="text-gray-500 text-sm w-full">{{ task.description }}</p>
          <div class="flex justify-end mt-4">
            <button class="w-7 h-7 bg-blue-100 text-blue-700 rounded mr-2">
              <i class="las la-pen"></i>
            </button>
            <button class="w-7 h-7 bg-red-100 text-red-700 rounded">
              <i class="las la-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
