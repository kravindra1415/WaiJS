//function returning object

//returning a blank object
function f1() {
    return {};  //blank object
}

//OR
//Using Object literel with properties
function f2() {
    return { description: "Laptop", price: 1000 };  //object with some properties
}

//OR
function f3() {
    return new Object();    //This is a blank javascript object
}

//OR
function f4() {
    return f1();    //This will return object returned by f1()
}

//OR  returning object creating  in IIF.
function f5() {
    return (function () { return { prop1: 'value1' } })();
}

let myobj = f1();
console.log(myobj)
myobj.myproperty = "myvalue";   //we can set a property to a function
console.log(myobj)

let myobj2 = f2();
console.log(myobj2);

let myobj3 = f3();
myobj3.myproperty = "function 3";
console.log(myobj3);

let myobj4 = f4();
myobj4.myproperty = "function 4";
console.log(myobj4);

let myobj5 = f5();
console.log(myobj5);
