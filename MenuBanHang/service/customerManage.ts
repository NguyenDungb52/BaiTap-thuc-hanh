import { Manage } from './Manage';
import { Customer } from './../model/customer';
export class CustomerManage implements Manage<Customer>{
    listCustomer : Customer [] = []
    add(t: Customer) {
       this.listCustomer.push(t)
    }
    update(id: number, t: Customer) {
        throw new Error('Method not implemented.');
    }
    remove(id: number) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        throw new Error('Method not implemented.');
    }
    findById(id: number) {
        throw new Error('Method not implemented.');
    }
   
}