import { Person1 } from './../model/Person';
import { Family } from './../model/Family';
import { Street } from "../model/Street";


let street : Street = new Street(1,'A')

let input = require("readline-sync");
function start(){
    let menu = `------Menu Chinh------- \n1. Them nha \n 2. Danh sach nha\n 0.Thoat `
    let choice 
    do {
        console.log(menu);
        choice = +input.question('nhap lua chon cua ban')
        switch(choice){
            case 1 :
            addFaminly()
            break;
            case 2 :

                break;
        }
        
    } while (choice != 0);
}
function addFaminly(){
    let menu = `-------Them Nha--------`
    let  id = input.question('nhap ID : ')
    let address = input.question('nhap dia chi nha : ')
    let family : Family = new Family(id,address)
    street.add(family)
}
function addPerson(family: Family){

    let id =  input.question('nhap ID :')
    let name = input.question('nhap Ten :')
    let age = input.question('nhap tuoi')
    let job = input.question('nhap cong viec :')
    let person : Person1 = new Person1(id,name,age,job)
    family.add(person)

}
function main(){
    start()
}
main()
