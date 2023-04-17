class Circle {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="98" fill="${this.shapeColor}" stroke="black" stroke-width="2"/>
<text x="150" y="122" font-family="Georgia Italic" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Triangle {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150,0 25,198 275,198" fill="${this.shapeColor}" stroke="black" stroke-width="2"/>
<text x="150" y="140" font-family="Georgia Italic" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Rectangle {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="25" width="200" height="150" fill="${this.shapeColor}" stroke="black" stroke-width="2"/>
<text x="150" y="125" font-family="Georgia Italic" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

module.exports = {
    Circle: Circle,
    Triangle: Triangle,
    Rectangle: Rectangle
};