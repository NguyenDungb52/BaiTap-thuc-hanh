export class Customer {
    private id : number
    private name : string

    constructor(id : number, name : string) {
        
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
}