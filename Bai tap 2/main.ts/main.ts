import { DocumentManager } from "./../service/documentManager";
import { Person } from "./../model/Person";
import { Household } from "../model/HouseHold";
let listDoc: DocumentManager = new DocumentManager();
let input = require("readline-sync");
function menuAdd() {
  let menu = `
    1. Them ho gia dinh vao khu : 
    2. Xoa ho gia dinh khu  
    3. Hien thi ho gia dinh khu  : `;
  console.log(menu);
}
function Khu() {
  let khu = `
    1. Khu A
    2. Khu B
    3. Khu C
    4. Khu D`;
  console.log(khu);
}

function addHouse(khuId: number) {
  let id = +input.question("nhap ID : ");
  let menber = +input.question("nhap so nguoi trong gia dinh: ");
  let address = input.question("nhap dia chi nha: ");
  let households = input.question(" nhap ten chu nha : ");
  let house = new Household(id, menber, address, households);
  let arr = addPerson(menber);

  let houses: object = {
    khu: khuId,
    id: id,
    menber: arr,
    address: address,
    household: households,
  };
  listDoc.add(houses);
}

function addPerson(menber: number) {
  console.log(menber);
  let arrayMenber: any = [];
  for (let i = 0; i < menber; i++) {
    let menu = `thong tin tung nguoi`;
    console.log(menu);
    let id = input.question("nhap ID : ");
    let name = input.question("nhap ten : ");
    let age = +input.question("nhap tuoi cua nguoi do : ");
    let occcupation = input.question("nghe nghiep : ");
    let informationPerson: object = {
      id: id,
      name: name,
      age: age,
      occcupation: occcupation,
    };
    arrayMenber.push(informationPerson);
  }
  return arrayMenber;
}

function show(khuID:number) {
 
 listDoc.showall(khuID);
 
}
function main() {
  let choice: number;
  do{
  Khu();
  choice = +input.question("nhap lua chon cua ban :");
  switch (choice) {
    case 1:
      menuAdd();
      let choice1 = +input.question("nhap lua chon cua ban :");
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
      let choice2 = +input.question("nhap lua chon cua ban :");
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
      let choice3 = +input.question("nhap lua chon cua ban :");
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
      let choice4 = +input.question("nhap lua chon cua ban :");
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
  }while(choice != 0)
}
main();
