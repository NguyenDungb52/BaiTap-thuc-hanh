"use strict";
exports.__esModule = true;
exports.Household = void 0;
var Household = /** @class */ (function () {
    function Household(id, menber, address, household) {
        this.id = id;
        this.menber = menber;
        this.address = address;
        this.household = household;
    }
    Household.prototype.getId = function () {
        return this.id;
    };
    Household.prototype.setId = function (id) {
        this.id = id;
    };
    Household.prototype.getMenber = function () {
        return this.menber;
    };
    Household.prototype.setMenber = function (menber) {
        this.menber = menber;
    };
    Household.prototype.getAddress = function () {
        return this.address;
    };
    Household.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Household;
}());
exports.Household = Household;
