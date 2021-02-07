const Instructor = require('./instructor');
const Student = require('./student');

const userFactory = (type, name, position, salary = 0, level="Beginer") => {
    if(type ==='instructor'){
        return new Instructor(name, position, salary);
    }
    if(type ==='student'){
        return new Student(name, level);
    }
}

module.exports = userFactory;
