//Named Functions
function m(){
	console.log("runnning m");
	}
m();

//Un-Named functions
var f=function(){
		console.log("runnning anonymous functions");
}
	
f();

//IIF: Imadiately invoked functions

(function (){console.log ("This is invoked immediately(IIF)")})();

//function to create objects: Function constructor

function Product(description,make){
	this.description=description;
	this.make=make;
}

 var p=new Product("chair","Godrej");//This will create an object using constructor function.
 
 console.log(p.description);	
 console.log(p.make);

 
 
 

