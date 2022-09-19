import { hoGiaDinh } from "../model/hoGiaDinh";
let input = require("readline-sync");
let listHoGD: hoGiaDinh = new hoGiaDinh();
function menuKhu() {
  let menu = `
    1. Khu A 
    2. Khu B 
    3. Khu C 
    4. Khu D
    `;
  console.log(menu);
}

function menu() {
  let menu = `
    1. Them ho
    2. Sua ho
    3. Xoa ho
    4. Hien thi
    5. tim nguoi > 5
    6. tim nguoi 
    `;
  console.log(menu);
}

function hamThem(khu: string) {
  let id = +input.question("nhap id");
  let diaChi = input.question("nhap dia chi");
  let chuHo = input.question("ten chu nha");
  let soThanhVien = +input.question("nhap so nguoi");
  let arrThanhVien: any = [];
  for (let i = 0; i < soThanhVien; i++) {
    let id = +input.question("nhap id thanh vien");
    let ten = input.question("nhap ten thanh vien");
    let tuoi = +input.question("nhap tuoi");
    let ngheNghiep = input.question("nghe nghiep");
    let tv: any = {
      id: id,
      ten: ten,
      tuoi: tuoi,
      ngheNghiep: ngheNghiep,
    };
    arrThanhVien.push(tv);
  }
  let hoGD = {
    khu: khu,
    id: id,
    diaChi: diaChi,
    chuHo: chuHo,
    tv: arrThanhVien,
  };
  listHoGD.add(hoGD);
}
function hamsua() {
  let id = +input.question("nhap id can sua : ");
  listHoGD.edit(id);
}
function hamxoa() {
  let id = +input.question("nhap id can xoa  : ");
  listHoGD.remove(id);
}
function hienThi() {
  listHoGD.show();
}

function timSoNguoiLonHon5(){
  listHoGD.searchNumberPeople()
}

function timTenNguoi(){
  let name = input.question('nha')
  listHoGD.searchNamePeople(name)
}

function main() {
  menuKhu();
  let choice = +input.question("nhap lua chon cua ban");
  do {
    switch (choice) {
      case 1:
        menu();
        let choice1 = +input.question("nhap lua chon cua ban");
        switch (choice1) {
          case 1:
            hamThem("khu A");
            break;
          case 2:
            hamsua();
            break;
          case 3:
            hamxoa();
            break;
          case 4:
            hienThi();
            break;
          case 5:
            timSoNguoiLonHon5();
            break;
          case 6:
            timTenNguoi();
            break;
        }
        break;
    }
  } while (choice != 0);
  
}

main();
