function sayHello() {
    return "Hello from module1";
}

const myconst = "This is constant value from m1";

var v1 = "V1 of m1", v2 = "V2 of module1"
export { v1 as default, v2, myconst, sayHello }