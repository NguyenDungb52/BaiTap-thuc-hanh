"use strict";
exports.__esModule = true;
var documentManager_1 = require("./../service/documentManager");
var HouseHold_1 = require("../model/HouseHold");
var listDoc = new documentManager_1.DocumentManager();
var input = require("readline-sync");
function menuAdd() {
    var menu = "\n    1. Them ho gia dinh vao khu : \n    2. Xoa ho gia dinh khu  \n    3. Hien thi ho gia dinh khu  : ";
    console.log(menu);
}
function Khu() {
    var khu = "\n    1. Khu A\n    2. Khu B\n    3. Khu C\n    4. Khu D";
    console.log(khu);
}
function addHouse(khuId) {
    var id = +input.question("nhap ID : ");
    var menber = +input.question("nhap so nguoi trong gia dinh: ");
    var address = input.question("nhap dia chi nha: ");
    var households = input.question(" nhap ten chu nha : ");
    var house = new HouseHold_1.Household(id, menber, address, households);
    var arr = addPerson(menber);
    var houses = {
        khu: khuId,
        id: id,
        menber: arr,
        address: address,
        household: households
    };
    listDoc.add(houses);
}
function addPerson(menber) {
    console.log(menber);
    var arrayMenber = [];
    for (var i = 0; i < menber; i++) {
        var menu = "thong tin tung nguoi";
        console.log(menu);
        var id = input.question("nhap ID : ");
        var name_1 = input.question("nhap ten : ");
        var age = +input.question("nhap tuoi cua nguoi do : ");
        var occcupation = input.question("nghe nghiep : ");
        var informationPerson = {
            id: id,
            name: name_1,
            age: age,
            occcupation: occcupation
        };
        arrayMenber.push(informationPerson);
    }
    return arrayMenber;
}
function show(khuID) {
    listDoc.showall(khuID);
}
function main() {
    var choice;
    do {
        Khu();
        choice = +input.question("nhap lua chon cua ban :");
        switch (choice) {
            case 1:
                menuAdd();
                var choice1 = +input.question("nhap lua chon cua ban :");
                switch (choice1) {
                    case 1:
                        addHouse(1);
                        break;
                    case 2:
                        console.log("xoa");
                        break;
                    case 3:
                        show(1);
                        break;
                }
                break;
            case 2:
                menuAdd();
                var choice2 = +input.question("nhap lua chon cua ban :");
                switch (choice2) {
                    case 1:
                        addHouse(2);
                        break;
                    case 2:
                        console.log("xoa");
                        break;
                    case 3:
                        show(2);
                        break;
                }
                break;
            case 3:
                menuAdd();
                var choice3 = +input.question("nhap lua chon cua ban :");
                switch (choice3) {
                    case 1:
                        addHouse(3);
                        break;
                    case 2:
                        console.log("xoa");
                        break;
                    case 3:
                        show(3);
                        break;
                }
                break;
            case 4:
                menuAdd();
                var choice4 = +input.question("nhap lua chon cua ban :");
                switch (choice4) {
                    case 1:
                        addHouse(4);
                        break;
                    case 2:
                        console.log("xoa");
                        break;
                    case 3:
                        show(4);
                        break;
                }
                break;
        }
    } while (choice != 0);
}
main();
