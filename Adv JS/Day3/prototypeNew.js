function Person(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

var person = new Person('Ankit', 'Patil', 23);

console.log(person);

function Student(edu, address, hobby) {
    this.edu = edu;
    this.address = address;
    this.hobby = hobby;
    this.toString = function () {
        return this.fname + "," + this.lname + "," + this.age + "," + this.edu + "," + this.address + "," + this.hobby;
    }
}

Student.prototype = person;

var student = new Student("BSC", "pune", "reading");
console.log(student.fname);
console.log(student.toString());
console.log(`first Name is: ${student.fname = 'Ravindra'} and last name is: ${student.lname = 'Kawale'}`);
console.log(student.age);
console.log(student.edu);
console.log(student.constructor.prototype);


var arr = new Array;
console.log(arr.constructor)

function f() { }
console.log(f.constructor)

var obj = {}
console.log(obj.constructor)
