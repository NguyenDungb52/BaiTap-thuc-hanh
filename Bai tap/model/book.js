"use strict";
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
exports.__esModule = true;
exports.Book = void 0;
var document_1 = require("./document");
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(id, producer, quantity, page, author) {
        var _this = _super.call(this, id, producer, quantity) || this;
        _this.page = page;
        _this.author = author;
        return _this;
    }
    Book.prototype.getPage = function () {
        return this.page;
    };
    Book.prototype.setPage = function (page) {
        this.page = page;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    return Book;
}(document_1.Document));
exports.Book = Book;
