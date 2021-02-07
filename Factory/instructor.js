const Person = require('./person');

class Instructor extends Person{
    constructor(name, position, salary){
        super(name);
        this.position = position;
        this.salary = salary;
    }
    toString(){
        return JSON.stringify(this);
    }
}

module.exports = Instructor;