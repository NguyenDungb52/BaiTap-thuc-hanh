import { Manage } from './Manage';
import { OrderDetail } from '../model/orderDetail';
export class OrderDetailManage implements Manage<OrderDetail>{
    listOrderDetail : OrderDetail  [] = []
    add(t: OrderDetail) {
       this.listOrderDetail.push(t)
    }
    update(id: number, t: OrderDetail) {
        throw new Error('Method not implemented.');
    }
    remove(id: number) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        for(let i = 0; i< this.listOrderDetail.length; i++ ){
            console.log(`${this.listOrderDetail[i].getCustomer.name} , ${this.listOrderDetail[i].getCustomer}, thoi gian: ${this.listOrderDetail[i].getTime} `);
        }
    }
    findById(id: number) {
        this.listOrderDetail.forEach((item, index) =>{
            if(item.getId() == id ){
                return  index
            }
        })
        return -1
    }

}