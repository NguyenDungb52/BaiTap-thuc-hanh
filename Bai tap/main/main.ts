import { DocumentManager } from "./../service/doccumentManager";
import { Book } from "./../model/book";
let input = require("readline-sync");
let listDoc: DocumentManager = new DocumentManager();
function mainMenu() {
  let menu = `
    1. Them tai lieu
    2. Xoa tai lieu
    3. Sua tai lieu
    4. Hien thi tai lieu
    0. Thoat `;
  console.log(menu);
}
function addMenu() {
    let choice :number
 
  do {
    let menu = `
    1. Them sach
    2. Them tap chi
    0. Thoat `;
    
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
  let id = input.question("nhap id :");
  let producer = input.question("nha xuat ban : ");
  let quantity = +input.question("nhap so luong");
  let page = +input.question("so trang");
  let author = input.question("tac gia");
  let book: Book = new Book(id, producer, quantity, page, author);
  listDoc.add(book);
  show();
}

function show() {
  console.log(listDoc.showAll());
}
 function deleteMenu(){
            let id =  + input.question(' nhap Id can xoa')
            listDoc.delete(id)
         }

  function editMenu() {
    let id = +input.question('nhap id can sua ')
    let producer = input.question("nha xuat ban : ");
  let quantity = +input.question("nhap so luong");
  let page = +input.question("so trang");
  let author = input.question("tac gia");
  let book: Book = new Book(id, producer, quantity, page, author);
  listDoc.edit(id,book)

  }      
function main() {
  let choice: number;
  do {
    mainMenu();
    choice = +input.question("nhap lua chon cua ban : ");
      switch (choice) {
        case 1:
          addMenu();
          break;
          case 2 : 
          deleteMenu()
          break
          case 3 :
            editMenu()
            break
        case 4:
          show();
          break;
      }
  } while (choice != 0);
}
main();
