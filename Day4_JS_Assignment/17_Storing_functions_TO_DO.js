/**
 * Created by vivekkulkarni on 7/14/16.
 */

var myObj = {
    cache: {},
    fnId: 0,
    add: function (fn) {

        if (fn.id == undefined) {
            console.log("Inside if " + fn.id);
            fn.id = this.fnId++;
            return !!(this.cache[fn.id] = fn);
        }
        return false;
    }
}
function printAllFunctions(obj) {
    console.log(this.cache);

}
function hisfunction() { }
var f1 = function myfunction() { };

var f2 = function yourfunction() { };

console.log("********");


myObj.add(hisfunction);
myObj.add(hisfunction);
console.log("*******");
console.log("Added ? " + myObj.add(f1));
console.log("Added again ? " + myObj.add(f1));//adding second time will not add
console.log("Adding another function " + myObj.add(f2));
printAllFunctions.call(myObj, myObj.cache);

