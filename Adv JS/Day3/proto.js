
function Employee(id, salary, dept) {
    this.id = id;
    this.salary = salary;
    this.dept = dept;
    this.getId = function () {
        return this.id;
    }

    this.getSalary = function () {
        return this.salary;
    }

    this.toString = function () {
        return this.id + "," + this.salary + "," + this.dept;
    }
}

var employee = new Employee(1, 10000, "IT");

function Manager(role, exp) {
    this.role = role;
    this.exp = exp;
}
//to make manager as subclass of Employee use prototype


Manager.prototype = employee;//Manager extends Employee
var manager1 = new Manager("DevopsManager", 5)
var manager2 = new Manager("HR", 7)

console.log(manager1.role);
console.log(manager1.id);
console.log(manager1.id = 200)
console.log(manager1.salary);
console.log(manager1.dept);
console.log(employee.toString())

Manager.prototype.toString = function () { return this.role + "," + this.exp + "," + this.id }
var manager2 = new Manager("HR", 7)
console.log(manager2.toString());

Manager.prototype.fun = function () { return "This function is for all Manager Objects.." };
console.log(manager1.fun());