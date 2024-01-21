class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    getArea() {

    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        let area = (3.14 * (this.radius * this.radius));
        return area;
    }

    print() {
        console.log(`Circle (r: ${this.radius}, color: ${this.color} ).`);
    }
}

let ring = new Circle('Red', 4);

class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color);
        this.length = length;
        this.width = width;
    }

    getArea() {
        return (this.length * this.width);
    }

    print() {
        console.log(`Rectangle (l: ${this.length}, w: ${this.width}, color: ${this.color} ).`);
    }
}

let ristkylik = new Rectangle('Blue', 15, 7);
let ristkylik2 = new Rectangle('White', 5, 5);

class Paint {
    constructor() {
        this.kujundid = [];
    }

    addShape(shape) {
        this.kujundid.push(shape);
    }

    getShapes() {
        return this.kujundid;
    }

    calculateTotalArea() {
        let totalArea = 0;
        this.kujundid.forEach(kujund => {
            totalArea += kujund.getArea();
        });
        return totalArea;
    }

    getCircles() {
        return this.kujundid.filter(shape => shape instanceof Circle);
    }

    getSquares() {
        return this.kujundid.filter(shape => shape instanceof Square);
    }

    getRectangles() {
        return this.kujundid.filter(shape => shape instanceof Rectangle);
    }
}

let varv1 = new Paint();

varv1.addShape(ristkylik);
varv1.addShape(ring);
varv1.addShape(ristkylik2);
console.log(varv1.getShapes());

console.log(varv1.calculateTotalArea());

console.log(varv1.getCircles());
console.log(varv1.getRectangles());