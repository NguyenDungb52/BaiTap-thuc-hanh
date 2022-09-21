"use strict";
exports.__esModule = true;
var productManage_1 = require("./../service/productManage");
var product_1 = require("./../model/product");
var listProduct = new productManage_1.ProductManage();
var input = require("readline-sync");
function mainMenu() {
    var menu = "---------Menu-------\n              1. them sua xoa san pham\n              2. them khack hang\n              3. mua san pham\n              4. hien hoa don";
    console.log(menu);
    var choice = +input.question(" nhap lua chon");
    switch (choice) {
        case 1:
            menuProduct();
            break;
    }
}
function menuProduct() {
    var menu = "\n                  1. them san pham  \n                  2. sua san pham\n                  3. xoa san pham\n                  4. hien thi san pham";
    console.log(menu);
    var choice = +input.question("nhap lua chon  ");
    switch (choice) {
        case 1:
            addProduct();
            menuProduct();
            break;
        case 2:
            editProduct();
            menuProduct();
            break;
        case 3:
            removeProduct();
            menuProduct();
            break;
        case 4:
            showProduct();
            menuProduct();
            break;
    }
}
function addProduct() {
    var id = input.question("nhap ID");
    var name = input.question("nhap ten san pham");
    var quantity = input.question("nhap so luong san pham");
    var product = new product_1.Product(id, name, quantity);
    listProduct.add(product);
}
function editProduct() {
    var id = +input.question("nhap Id san pham can sua  :");
    listProduct.update(id);
}
function removeProduct() {
    var id = +input.question('nhap Id can xoa :  ');
    listProduct.remove(id);
}
function showProduct() {
    console.log(listProduct.findAll());
}
function main() {
    mainMenu();
}
main();
