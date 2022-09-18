import { Manager } from './../service/Manager';
import { Family } from "./Family";
export class Street implements Manager<Family> {
  private _id: number;
  private _name: string;

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

  listFamily: Family[] = [];

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }
    add(t: Family) {
       this.listFamily.push(t)
    }
    findAll() {
        return this.listFamily
    }
    edit(id: number, t: Family) {
        throw new Error('Method not implemented.');
    }
    findById(id: number, t: Family) {
        throw new Error('Method not implemented.');
    }
}
