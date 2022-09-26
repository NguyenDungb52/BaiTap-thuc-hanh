import { Product } from './../model/product';
import { Manage } from './Manage';
let input = require('readline-sync');
export class ProductManage implements Manage<Product> {
    
     listProduct : Product[] = []
    add(t: Product) {
      this.listProduct.push(t)
    }
    update(id: number) {
        for( let i = 0; i< this.listProduct.length ; i++){
            if( this.listProduct[i].getId()  == id    ){
                    let idMoi = +input.question('nhap ID moi :')
                    let nameMoi = input.question('nhap ten san pham moi  ')
                    let quantityMoi = +input.question('nhap so luong moi')
                    let productMoi = new Product(idMoi, nameMoi, quantityMoi)
                    this.listProduct.splice(i,1,productMoi)
            }
        }
        return this.listProduct
    }
    remove(id: number) {
       for(let i = 0; i < this.listProduct.length; i++){
            if(this.listProduct[i].getId() == id){
               this.listProduct.splice(i,1)
            }
       }
       return this.listProduct
    }
    findAll() {
       return this.listProduct
    }
    findById(id: number) {
       
    }

}