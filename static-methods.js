// Static methods
// are like helper functions because they do not require an instance of a class,
// but rather are called on the class directly.

class Square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
    }
    // "this" keyword is not required.
    static equals (a, b) {
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimensions (width, height) {
        return width === height;
    }
}

let square1 = new Square(8);
console.log(square1);

let square2 = new Square(7);
console.log(square2);

console.log(Square.equals(square1, square2)); //false

console.log(Square.isValidDimensions(5, 5)); // true