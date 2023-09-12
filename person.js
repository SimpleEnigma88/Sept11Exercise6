personIDs = {};

class Person {
    // Write code here
    #id = Math.ceil(Math.random() * 100);
    constructor() {

    }

    getID() {
        return this.#id;
    }
}

module.exports = Person;

