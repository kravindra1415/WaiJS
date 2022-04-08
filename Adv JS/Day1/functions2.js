function m() {
	console.log("No arg function called")
	console.log("NO of arguments passed are " + arguments.length);
	let no = arguments.length;

	for (let i = 0; i < no; i++) {
		console.log(arguments[i])
	}
}

//m();
//m(1,"A","B",true)


//printing name of the function

function myFunction() {
	console.log("my function running");
}

//console.log("Name of function is: "+myFunction.name)

var f = function m1() {
	console.log("m1 running");
}

//f();
//console.log(f.name)

//passing a function as an arguments to another functions

function f3(fn) {
	console.log("Function passed: " + fn.name)
	fn()//running function passed to it
}

//f3(myFunction)
//f3(function m3(){console.log("m3 function")})
//f3(f)


function m4() {
	return function () { console.log("this function returned from m4"); }
}

//var retVal = m4();
//retVal(); //this will execute anonymous functioned defined inside m4;


//Function returning a named Function
function f5() {
	return m4();
}

//var retValOfm5 = m5();


//function taking object as an arguments
function f11(obj) {
	for (let propName in obj) {
		console.log(propName + "," + obj[propName]);
	}
}

var myobj = { fname: "vivek", lname: "kulkarni", age: 53 };
f11(myobj);


//Iterate object using Object.entries
//JS gives multiple ways(syntax) to achieve the same thing

function f12(obj) {
	for (let [propName, propValue] of Object.entries(obj)) {
		console.log(propName + ":" + propValue);
	}
}

function f13(obj) {
	for (let keys of Object.keys(obj)) {
		console.log(keys);
	}
}

f13(myobj)

function f14(obj) {
	for (let value of Object.values(obj)) {
		console.log(value);
	}
}

f14(myobj)
