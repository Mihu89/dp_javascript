let Course = require('./Course');

// const course = new Course("Bootstrap 5", "Paul Mcartty");
const course = new Course({id: 1, title:"Bootstrap 5", author:"Paul Mcartty"});
// course.toString();
course.DbRequest();

// Using FactoryPattern
const userFactory = require('./Factory/userFactory');

const grisha = userFactory('instructor', 'Grisha', 'software engineer', 10000);
const vasea = userFactory('student', 'Vasea', '',0,'Upper-Intermediate');
console.log(grisha.toString());
console.log(vasea.toString());

//Singleton

const Singleton = (() => {
 let course;

 const assignCourse = () => {
     const course = new Object('Php');
     return course;
 }

 return {
     getInstance : () =>{
        if(!course ){
            course = assignCourse;
        }
        return course;
     }
 }
})();

const buyFirstTime = Singleton.getInstance();
const buySeccondTime = Singleton.getInstance();

if(buyFirstTime === buySeccondTime){ 
   console.log("Buy the course"); 
}
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