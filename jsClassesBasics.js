
class Rectangle {
    constructor (_width, _height, _color) {
        console.log("This rectangle is being created!");

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea() {
        return this.width * this.height;
    }
}

let myRectangle1 = new Rectangle(5, 3, 'blue');
let myRectangle2 = new Rectangle(4, 6, 'green');


console.log("Area:", myRectangle1.getArea());
console.log("Area:", myRectangle2.getArea());