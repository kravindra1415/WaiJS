var student = function Student(rollno, name) {
    this.rollno = rollno;
    this.name = name;
    this.toString = function () {
        return this.rollno + "," + this.name;
    }
}

let s1 = new student(1, "vivek");
let s2 = new student(2, "yogesh");

//JS gives us functionality to add new properties dynamically..

function addNewProperties(obj, propNameValueMap) {
    for (let [propName, propValue] of propNameValueMap) {
        obj[propName] = propValue;
    }
}

console.log(s1.city);//undefined
console.log(s1.pin);//undefined

let nv = new Map();
nv.set('city', 'Pune');
nv.set('pin', 41004);

addNewProperties(s1, nv); //this functions add city and pin as new properties on s1
console.log(s1.city);
console.log(s1.pin);

addNewProperties(s2, nv);
console.log(s2.city);
console.log(s2.pin);