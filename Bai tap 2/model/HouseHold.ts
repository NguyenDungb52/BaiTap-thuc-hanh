import { Person } from "./Person";

export  class Household  {
    private id : number
    private menber : number
    private address : string
    public household : string
    
    constructor(id : number,menber:number, address : string,household:string){
        this.id = id
        this.menber = menber
        this.address = address
        this.household = household
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getMenber(): number {
        return this.menber;
    }

    public setMenber(menber: number): void {
        this.menber = menber;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }   
}