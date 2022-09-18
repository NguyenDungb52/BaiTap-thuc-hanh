var Emloyee = /** @class */ (function () {
    function Emloyee(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
    Emloyee.prototype.FullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Emloyee.prototype.GetAge = function () {
        return this.age;
    };
    return Emloyee;
}());
var myEmployee = new Emloyee('Dung', 'Nguyen', 22);
var fullName = myEmployee.FullName();
var age = myEmployee.GetAge();
console.log("Name of Person: " + fullName + '\nAge: ' + age);
