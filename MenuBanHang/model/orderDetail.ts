import { Product } from './product';
import { Customer } from "./customer"

export class OrderDetail {
    private id : number
    private customer : Customer
    private time : string
    cart: Product [] = []
    constructor (id : number, customer : Customer, time : string){
            this.id = id
            this.customer = customer
            this.time = time
    }
     add(product : Product){
        this.cart.push(product)
     }
    

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getCustomer(): Customer {
        return this.customer;
    }

    public setCustomer(customer: Customer): void {
        this.customer = customer;
    }

    public getTime(): string {
        return this.time;
    }

    public setTime(time: string): void {
        this.time = time;
    }
    showCart() {
        let str = ``;
        this.cart.forEach((item) => {
            str += `${item.getName} , sl : ${item.getQuantity}`
        })
        return str;
    }

}