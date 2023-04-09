let objectCreate = (function() {
    class createTodo {
        constructor(name, status, date, description) {
            this.name = name;
            this.status = status;
            this.date = date;
            this.description = description;
        }
    }

    return {
        createTodo: createTodo
    }
})()

export {
    objectCreate
}