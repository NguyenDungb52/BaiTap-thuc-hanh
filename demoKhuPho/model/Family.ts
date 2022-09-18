import { Person1 } from './Person';
import { Person } from './../../Bai tap 2/model/Person';
import { Manager } from './../service/Manager';
export class Family implements Manager<Person1> {
    private id :number
    private address : string
    private member : number = 0
    listPerson : Person1[] = []
    constructor(id : number, address : string) {
        this.id = id
        this.address =  address
        this.member  = this.listPerson.length 
    }
    add(t: Person1) {
       this.listPerson.push(t)
       this.member++
    }
    findAll() {
        return this.listPerson
    
    }
    edit(id: number, t: Person1) {
    }
    findById(id: number, t: Person1) {
     
    }

}