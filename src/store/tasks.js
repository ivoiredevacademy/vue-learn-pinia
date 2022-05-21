import { defineStore } from "pinia";
import Storage from '../utils/Storage';


export const useTasksStore = defineStore("tasks", {
  state() {
    return {
      tasks: [],
    };
  },
  actions: {
    createNewTask(data) {
        this.tasks.push(data);
    }
  },
  getters: {
    completedTasks(state) {
        return state.tasks.filter(task => task.complete).length || 0;
    },
    pendingTasks() {
        return this.tasks.length - this.completedTasks;
    }
  }
});
