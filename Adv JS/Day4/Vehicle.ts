export class Vehicle {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getMake(): string {
        return this.make;
    }

    setMake(make: string) {
        this.make = make;
    }

    getModel(): string {
        return this.model;
    }

    setModel(model: string) {
        this.model = model;
    }

    getYear(): number {
        return this.year;
    }

    setYear(year: number) {
        this.year = year;
    }

    toString() {
        return this.year + "," + this.make;
    }
}

var car: Vehicle = new Vehicle("Toyota", "Innova", 2012);
console.log(car.toString());
car.setMake("Honda");
car.setModel("City");
car.setYear(2010);
console.log(car.toString())