"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.setMake = function (make) {
        this.make = make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.setModel = function (model) {
        this.model = model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.setYear = function (year) {
        this.year = year;
    };
    Vehicle.prototype.toString = function () {
        return this.year + "," + this.make;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var car = new Vehicle("Toyota", "Innova", 2012);
console.log(car.toString());
car.setMake("Honda");
car.setModel("City");
car.setYear(2010);
console.log(car.toString());
