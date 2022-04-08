/**
 * Created by vivekkulkarni on 7/14/16.
 */


function isPrime(value) {
    //TODO#1  declare property cache on this function and initialize it to {} if it is not defined yet


    //TODO#2  If number is  already checked for its prime-ness then return from the cache

    var prime = value != 1;
    for (i = 2; i < value; i++) {
        if (value % i == 0) {
            prime = false;
            break;
        }
    }
    //TODO #3  store the result into cache

    return prime;
}

console.time("second");
console.log(isPrime(101001001));
console.timeEnd("second");

console.time("prime");

console.log(isPrime(101001001));
console.timeEnd("prime");


console.time("prime");

console.log(isPrime(101001001));
console.timeEnd("prime");

