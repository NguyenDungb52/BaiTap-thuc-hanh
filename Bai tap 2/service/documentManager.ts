import { Person } from './../model/Person';


import { IDocumentManager } from "./IDocumentManager";
import { Household } from "../model/HouseHold";

export class DocumentManager implements IDocumentManager  <Person>{
   private person : Person[] = []
   
    add(t:any) {
        this.person.push(t)
        console.log(this.person);
    }
    delete(id: number, t: Person) {
        
    }

    showall(khuID:number) {

        let arr: any = []

    
    console.log(this.person);
      console.log(this.person[0].khu);
   for(let i:any =0;i<this.person.length;i++){
         if(this.person[i].khu === khuID){
            arr.push(this.person[i])
         }
       }

     console.log(arr);
    }

    findById(id: number) {
       
    }

}