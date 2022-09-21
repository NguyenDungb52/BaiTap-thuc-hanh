export class Product {
    private id : number
    private name : string
    private quantity : number
        constructor(id : number, name : string, quantity : number){
            this.id = id
            this.name = name
            this.quantity = quantity
        }
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }


    
}