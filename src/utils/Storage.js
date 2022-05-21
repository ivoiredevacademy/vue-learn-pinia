export default new class Storage {
    constructor() {
        this.storage = localStorage;
    }

    #save(tasks) {
        this.setItem('tasks', tasks);
    }

    fetchAll() {
        const serializedTasks = this.storage.getItem('tasks');
        return JSON.parse(serializedTasks);
    }

    create(newTask) {
        const tasks = this.fetchAll();
        const serializedTasks = JSON.stringify([...tasks, newTask]);
        this.#save(serializedTasks);
    }

    remove(taskId) {
        const tasks = this.fetchAll();
        const filteredTasks = tasks.filter((task) => task.id !== taskId);
        this.#save(filteredTasks);
    }

    update(updatedTask) {
        const tasks = this.fetchAll();
        const updatedTasks = tasks.map((task) => {
            if(updatedTask.id === task.id) {
                return updatedTask;
            }

            return task;
        })

        this.#save(updatedTasks);
    }

}