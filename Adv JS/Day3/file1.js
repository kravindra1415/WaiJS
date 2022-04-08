export function sayHello() {
    return "from file1";
}

const myconst = "This is constant";

var v1 = "V1", v2 = "V2"
export { v1 as myv1, v2 as myv2, myconst as myconst2, sayHello as myhello }
