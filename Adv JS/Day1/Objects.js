//creating a object with just a literel syntax

var myobj = {}

//whenever we create object using any syntax 
//the constructor (function) of Object is called

console.log(myobj.constructor);

//Our own constructor function 

var student = function Student(rollno, name) {
    this.rollno = rollno;
    this.name = name;
    this.toString = function () {
        return this.rollno + "," + this.name;
    }
}

let s1 = new student(1, "vivek");
let s2 = new student(2, "yogesh");
let s3 = new student(3, "yuvraj");
let s4 = new student(4, "yuzi");

console.log(s1.constructor);
console.log(s1.toString());
console.log(s2.toString());
console.log(s3.toString());
console.log(s4.toString());

console.log(s1.name + "," + s1.rollno);
console.log(s1['rollno']);