export default new class Storage {
    constructor() {
        this.storage = localStorage;
    }

    #save(tasks) {
        this.storage.setItem('tasks', JSON.stringify(tasks));
    }

    fetchAll() {
        const serializedTasks = this.storage.getItem('tasks');
        return JSON.parse(serializedTasks);
    }

    performUpdate(data) {
        this.#save(data);
    }
}
