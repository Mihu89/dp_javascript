// Consdtructor pattern

const CourseDb = require("./CourseDb");

class Course {
    constructor(data){
        this.id = data.id;
        this.author = data.author;
        this.title = data.title;
    }
    // toString() {
    //     return console.log(this.title + " Author:" + this.author); 
    // }
    DbRequest(){
        CourseDb.dbInfo(this);
    }
}

module.exports = Course;
/*
// Old syntax:
var Course = function(author, title){
    this.author = author;
    this.title =title;

    this.toString = function() {
        return this.title + " Author:" + this.author;
    }
};

var course1 = new Course("Jack Fresco", "Project Venera");
var course2 = new Course("Ben Allan", "Identity V4");

console.log(course1.toString());
console.log(course2);
*/