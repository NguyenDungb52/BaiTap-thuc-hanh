"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(_id, _name, _age, _occcupation, _khu) {
        this.id = _id;
        this.name = _name;
        this.age = _age;
        this.occcupation = _occcupation;
        this.khu = _khu;
    }
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "occcupation", {
        get: function () {
            return this.occcupation;
        },
        set: function (occcupation) {
            this._occcupation = occcupation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "khu", {
        get: function () {
            return this.khu;
        },
        set: function (khuID) {
            this._khu = khuID;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
