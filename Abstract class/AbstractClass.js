var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Emloyee = /** @class */ (function () {
    function Emloyee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Emloyee.prototype.getFullName = function () {
        return "".concat(this.firstName, "  ").concat(this.lastName);
    };
    Emloyee.prototype.compensationStatement = function () {
        return "".concat(this.getFullName(), " nhan ").concat(this.getSalary(), " 1 thang");
    };
    return Emloyee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Emloyee));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(firstName, lastName, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contractor.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return Contractor;
}(Emloyee));
var Dung = new FullTimeEmployee("Dung", "Ngoc", 10000);
var Ngoc = new Contractor("Ngoc", "Nguyen", 100, 100);
console.log(Dung.compensationStatement());
console.log(Ngoc.compensationStatement());
