import { Household } from "./HouseHold"

export class Neiborhood {
   private id  :   number
   private name : string

   Neiborhood :  Household[] =[]
   constructor(id: number,name : string) {
        this.id = id
        this.name = this.name
}

    public getID(): number {
        return this.id;
    }

    public setID(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    
}

