console.log("Hello from Module2");

export default function sayHello() {
    return "Hello from module2";
}

const myconst = "This is constant value module2";

var v1 = "V1 of module2", v2 = "V2 of module2"
export { v1, v2, myconst }