import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { Shape } from "./shape";
let shape: Shape = new Shape("red", false);
console.log(shape);
console.log(shape.toString());

let circle: Circle = new Circle(3.5, "indigo", false);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());

let rectangle: Rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());

let square: Square = new Square(5.8, "yellow", true);
console.log(square);
console.log(square.toString());