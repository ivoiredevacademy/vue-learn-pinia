<script setup>
    import { useTasksStore } from '../store/tasks';

    const taskStore = useTasksStore();

</script>

<template>
    <div class="flex -mx-4">
        <div class="px-4 w-1/3">
            <div class="flex bg-white px-4 py-6 rounded-lg">
                <div class="w-1/3 flex justify-center">
                    <i class="las la-check text-3xl text-green-400"></i>
                </div>
                <div class="w-2/3 flex flex-col items-center">
                    <span class="text-2xl">{{ taskStore.completedTasks }}</span>
                    <span class="">Terminées</span>
                </div>
            </div>
        </div>
        <div class="px-4 w-1/3">
            <div class="flex bg-white px-4 py-6 rounded-lg">
                <div class="w-1/3 flex justify-center">
                    <i class="las la-hourglass-half text-3xl text-orange-400"></i>
                </div>
                <div class="w-2/3 flex flex-col items-center">
                    <span class="text-2xl">{{ taskStore.pendingTasks }}</span>
                    <span class="">En attente</span>
                </div>
            </div>
        </div>
        <div class="px-4 w-1/3">
            <div class="flex bg-white px-4 py-6 rounded-lg">
                <div class="w-1/3 flex justify-center">
                    <i class="las la-tasks text-3xl text-gray-700"></i>
                </div>
                <div class="w-2/3 flex flex-col items-center">
                    <span class="text-2xl">{{ taskStore.tasks.length }}</span>
                    <span class="">Total</span>
                </div>
            </div>
        </div>
    </div>
</template>
