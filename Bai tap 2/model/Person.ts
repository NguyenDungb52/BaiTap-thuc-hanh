  export class Person {
       private _id : number
       private _name : string
       private _age : number
       private _occcupation  : string
        private _khu: number
    constructor(_id : number,_name : string,_age : number,_occcupation  : string,_khu:number) {
        this.id = _id;
        this.name = _name
        this.age   = _age
        this.occcupation = _occcupation
        this.khu = _khu
    }


    public get id(): number {
        return this.id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this.name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get age(): number {
        return this.age;
    }

    public set age(age: number) {
        this._age = age;
    }

    public get occcupation(): string {
        return this.occcupation;
    }

    public set occcupation(occcupation: string) {
        this._occcupation = occcupation;
    }

    public get khu(): number {
        return this.khu;
    }

    public set khu(khuID: number) {
        this._khu = khuID;
    }

}

