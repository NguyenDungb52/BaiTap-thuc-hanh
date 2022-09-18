export class Person1 {
    private _id : number
    private _name : string
    private _age : number
    private _job : string
    

    constructor(id : number,name : string,age : number,job : string) {
        this._id = id
        this._name = name
        this._age = age
        this._job = job

}

    public get id(): number {
        return this.id;
    }

    public set id(id: number) {
        this.id = id;
    }

    public get name(): string {
        return this.name;
    }

    public set name(name: string) {
        this.name = name;
    }

    public get age(): number {
        return this.age;
    }

    public set age(age: number) {
        this.age = age;
    }

    public get job(): string {
        return this.job;
    }

    public set job(job: string) {
        this.job = job;
    }

}