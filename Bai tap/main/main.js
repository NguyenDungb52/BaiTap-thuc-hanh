"use strict";
exports.__esModule = true;
var doccumentManager_1 = require("./../service/doccumentManager");
var book_1 = require("./../model/book");
var input = require("readline-sync");
var listDoc = new doccumentManager_1.DocumentManager();
function mainMenu() {
    var menu = "\n    1. Them tai lieu\n    2. Xoa tai lieu\n    3. Sua tai lieu\n    4. Hien thi tai lieu\n    0. Thoat ";
    console.log(menu);
}
function addMenu() {
    var choice;
    do {
        var menu = "\n    1. Them sach\n    2. Them tap chi\n    0. Thoat ";
        console.log(menu);
        choice = +input.question("nhap lua chon cua ban :");
        switch (choice) {
            case 1:
                addBook();
                break;
            case 0:
                main();
                break;
        }
    } while (choice != 0);
}
function addBook() {
    var id = input.question("nhap id :");
    var producer = input.question("nha xuat ban : ");
    var quantity = +input.question("nhap so luong");
    var page = +input.question("so trang");
    var author = input.question("tac gia");
    var book = new book_1.Book(id, producer, quantity, page, author);
    listDoc.add(book);
    show();
}
function show() {
    console.log(listDoc.showAll());
}
function deleteMenu() {
    var id = +input.question(' nhap Id can xoa');
    listDoc["delete"](id);
}
function editMenu() {
    var id = +input.question('nhap id can sua ');
    var producer = input.question("nha xuat ban : ");
    var quantity = +input.question("nhap so luong");
    var page = +input.question("so trang");
    var author = input.question("tac gia");
    var book = new book_1.Book(id, producer, quantity, page, author);
    listDoc.edit(id, book);
}
function main() {
    var choice;
    do {
        mainMenu();
        choice = +input.question("nhap lua chon cua ban : ");
        switch (choice) {
            case 1:
                addMenu();
                break;
            case 2:
                deleteMenu();
                break;
            case 3:
                editMenu();
                break;
            case 4:
                show();
                break;
        }
    } while (choice != 0);
}
main();
