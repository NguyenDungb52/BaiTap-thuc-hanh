import { OrderDetailManage } from "./../service/orderDetailManage";
import { OrderDetail } from "./../model/orderDetail";
import { CustomerManage } from "./../service/customerManage";
import { Customer } from "./../model/customer";
import { ProductManage } from "./../service/productManage";
import { Product } from "./../model/product";

let listProduct: ProductManage = new ProductManage();
let listCustomer: CustomerManage = new CustomerManage();
let orderDetail: OrderDetailManage = new OrderDetailManage();
let input = require("readline-sync");

function mainMenu() {
  let menu = `---------Menu-------
              1. them sua xoa san pham
              2. them khack hang
              3. mua san pham
              4. hien hoa don`;
  let choice;
  do {
    console.log(menu);
    let choice = +input.question(" nhap lua chon");
    switch (choice) {
      case 1:
        menuProduct();
        break;
      case 2:
        addCustomer();
        menuProduct();
        break;
      case 4:
        showOrder();
        break;
    }
  } while (choice != 0);
}
function menuProduct() {
  let menu = `
                  1. them san pham  
                  2. sua san pham
                  3. xoa san pham
                  4. hien thi san pham`;
  console.log(menu);
  let choice;
  do {
    choice = +input.question("nhap lua chon  ");

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
  } while (choice != 0);
}
function addProduct() {
  let id = +input.question("nhap ID");
  let name = input.question("nhap ten san pham");
  let quantity = +input.question("nhap so luong san pham");
  let product: Product = new Product(id, name, quantity);
  listProduct.add(product);
}
function addCustomer() {
  let id = +input.question("nhap Id : ");
  let name = input.question("nhap ten khack hang : ");
  let customer: Customer = new Customer(id, name);
  listCustomer.add(customer);
}
function editProduct() {
  let id = +input.question("nhap Id san pham can sua  :");
  listProduct.update(id);
}

function removeProduct() {
  let id = +input.question("nhap Id can xoa :  ");
  listProduct.remove(id);
}
function buyProduct(){
  let id = +input.question('nhap id khach hang')
  for(let i = 0; i < listProduct.listProduct.length; i++){
      console.log(`id ${listProduct.listProduct[i].getId}`);
  }
}


function showProduct() {
  console.log(listProduct.findAll());
}


function showOrder() {
  orderDetail.findAll();
}
function main() {
  mainMenu();
}
main();
