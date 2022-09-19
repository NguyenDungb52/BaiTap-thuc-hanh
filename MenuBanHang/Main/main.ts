import { khackHang } from "../model/khackHang";
import { sanPham } from "../model/sanPham";

function menu() {
  let menu = `
    1. San pham
    2. Khach hang`;
  console.log(menu);
}


let input = require("readline-sync");
let listSanPham: sanPham = new sanPham();
let listKhachHang: khackHang = new khackHang();

function menuSanPham() {
    let menuSanPham = `
      1. Them san Pham
      2. Sua san pham
      3. Xoa san pham
      4. Hien thi san pham`;
    console.log(menuSanPham);
  }

 function menuKhackHang(){
    let menuKhackHang = `
    1. Them khack hang
    2. Sua ten khack hang
    3. Xoa ten khack hang
    4. Hien thi ten khack hang`
    console.log(menuKhackHang)
 } 


function addSanPham() {
  let idSanPham = +input.question("nhap ID san pham :");
  let tenSanPham = input.question("nhap ten san pham :");
  let soLuongSanPHam = +input.question("nhap so luong san pham :");
  let sanPHam = {
    idSanPham: idSanPham,
    tenSanPham: tenSanPham,
    soLuongSanPHam: soLuongSanPHam,
  };
  listSanPham.addSanPham(sanPHam);
}

function addKhackHang() {
  let idKhackHang = +input.question("nhap ID khack hang :");
  let tenKHackHang = input.question("nhap ho va ten khack hang");
  let khackHang = {
    idKhackHang: idKhackHang,
    tenKHackHang: tenKHackHang,
  };
  listKhachHang.addKhackHang(khackHang);
}
function suaSanPHam() {
  let id = +input.question("nhap ID san pham can sua ");
  listSanPham.editSanPham(id);
}
function suaKhackHang() {
  let id = +input.question("nhap ID khack hang can sua");
  listKhachHang.editKhackHang(id);
}
function xoaSanPham(){
    let id = +input.question('nhap ID san pham can xoa ')
    listSanPham.removeSanPham(id)
}

function xoaKhackHang(){
    let id = +input.question('nhap ID khack hang can xoa')
    listKhachHang.removeKhackHang(id)
}

function showSanPham(){
    listSanPham.showSanPham()
}

function showKhackHang(){
    listKhachHang.showKhackHang()
}

function main() {
  menu();
  let choice = +input.question("nhap lua chon cua ban");
  switch (choice) {
    case 1:
      menuSanPham();
      let choice1 = +input.question("nhap lua chon cua ban");
      switch (choice1) {
        case 1:
          addSanPham();
          break;
        case 2:
          suaSanPHam();
          break;
        case 3:
          xoaSanPham();
          break;
        case 4 :
            showSanPham()
            break  
      }
      break;

    case 2 : 
    menuKhackHang()
      let choice2 = +input.question('nhap ID khack hang')
         switch(choice2) {
                case 1  :
                    addKhackHang()
                    break
                case 2 :
                    suaKhackHang()
                    break
                case 3 : 
                    xoaKhackHang()
                case 4 :
                    showKhackHang()
         }

    break  
  }

}
main();
