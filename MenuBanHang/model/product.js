"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setId = function (id) {
        this.id = id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.getQuantity = function () {
        return this.quantity;
    };
    Product.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    return Product;
}());
exports.Product = Product;
