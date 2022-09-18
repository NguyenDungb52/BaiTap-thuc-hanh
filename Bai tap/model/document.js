"use strict";
exports.__esModule = true;
exports.Document = void 0;
var Document = /** @class */ (function () {
    function Document(id, producer, quantity) {
        this.id = id;
        this.producer = producer;
        this.quantity = quantity;
    }
    Document.prototype.getId = function () {
        return this.id;
    };
    Document.prototype.setId = function (id) {
        this.id = id;
    };
    Document.prototype.getProducer = function () {
        return this.producer;
    };
    Document.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    Document.prototype.getQuantity = function () {
        return this.quantity;
    };
    Document.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    return Document;
}());
exports.Document = Document;
