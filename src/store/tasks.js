import { defineStore } from "pinia";
import Storage from '../utils/Storage';

const tasks = Storage.fetchAll();

export const useTasksStore = defineStore("tasks", {
  state() {
    return {
      tasks: tasks || [],
      selectedTask: null
    };
  },
  actions: {
    createTask(data) {
      this.tasks.push(data);
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.save();
    },

    save() {
      Storage.performUpdate(this.tasks);
    }
  },
  getters: {
    completedTasks(state) {
      return state.tasks.filter(task => task.completed).length || 0;
    },
    pendingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  }
});
