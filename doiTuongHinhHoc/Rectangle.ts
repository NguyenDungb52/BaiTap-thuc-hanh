import {Shape} from "./shape"
export class Rectangle  extends Shape{
    private  width : number 
    private length : number
    constructor(width : number, length : number, color : string, filled : boolean ){
            super(color,filled)
            this.width = width
            this.length = length
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }
   public getArea(){
        return this.width * this.length
    }
  public  getPerimeter(){
        return(this.width + this.length)*2
    }
    public toString(): string {
            return "A Rectangle with width=" 
            + this.getWidth()
            +'anh length ='
            +this.getLength()
            + ", which is a subclass of "
            +super.toString()
    }
}
let CN = new Rectangle(2,5,'cam',true)

console.log(CN.toString());