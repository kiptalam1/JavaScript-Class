// Getters and setters

class Square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
    }
    // Getter
    get area () {
        return this.width * this.height;
    }
    // Setter
    set area (area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

let square1 = new Square(6);

// getters and setters are called as properties.i.e., No need for parenthesis().
console.log(square1.area); // 36

square1.area = 49;
console.log(square1.width); // 7
console.log(square1.height); // 7