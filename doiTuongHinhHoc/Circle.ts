import {Shape} from "./shape";
export class Circle extends Shape {
    private radius : number


    
    constructor(radius : number, color : string, filled : boolean) {
        super(color , filled)
        this.radius = radius 
    }
 
    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;

    }   
    public getArea () : number {
    return this.radius * this.radius * Math.PI
 }
    public getPerimeter() :number {
        return this.radius * 2 * Math.PI
    }
    public toString(): string {
        return "A Circle with radius="
        + this.getRadius()
        + ", which is a subclass of "
        + super.toString()
    }


}