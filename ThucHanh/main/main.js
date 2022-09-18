"use strict";
exports.__esModule = true;
var hoGiaDinh_1 = require("../model/hoGiaDinh");
var input = require("readline-sync");
var listHoGD = new hoGiaDinh_1.hoGiaDinh();
function menuKhu() {
    var menu = "\n    1. Khu A \n    2. Khu B \n    3. Khu C \n    4. Khu D\n    ";
    console.log(menu);
}
function menu() {
    var menu = "\n    1. Them ho\n    2. Sua ho\n    3. Xoa ho\n    4. Hien thi\n    ";
    console.log(menu);
}
function hamThem() {
    var id = +input.question("nhap id");
    var diaChi = input.question("nhap dia chi");
    var chuHo = input.question("ten chu nha");
    var soThanhVien = +input.question("nhap so nguoi");
    var arrThanhVien = [];
    for (var i = 0; i < soThanhVien; i++) {
        var id_1 = +input.question("nhap id thanh vien");
        var ten = input.question("nhap ten thanh vien");
        var tuoi = +input.question("nhap tuoi");
        var ngheNghiep = input.question("nghe nghiep");
        var tv = {
            id: id_1,
            ten: ten,
            tuoi: tuoi,
            ngheNghiep: ngheNghiep
        };
        arrThanhVien.push(tv);
    }
    var hoGD = {
        id: id,
        diaChi: diaChi,
        chuHo: chuHo,
        tv: arrThanhVien
    };
    listHoGD.add(hoGD);
}
function hamsua() { }
function hamxoa() { }
function hienThi() { }
function main() {
    menuKhu();
    var choice = +input.question("nhap lua chon cua ban");
    switch (choice) {
        case 1:
            menu();
            var choice1 = +input.question("nhap lua chon cua ban");
            switch (choice1) {
                case 1:
                    hamThem();
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
            }
            break;
    }
}
main();
