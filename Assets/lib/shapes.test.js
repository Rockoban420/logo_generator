// Create a constructor
// That will have 2 prototype methods
// 1 should add 2 numbers together
// other method should substract 2 mumbers together

const Shapes = require ('./shapes');
const Circle = Shapes.Circle;
const Triangle = Shapes.Triangle;
const Rectangle = Shapes.Rectangle;

describe('Shapes', () => {
    describe('Add', () => {
        it('should take 3 parameters and display them properly on the triangle shape', () => {
            const shape = new Triangle("SVG", 'red', 'darkblue');
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150,0 25,198 275,198" fill="darkblue" stroke="black" stroke-width="2"/>
<text x="150" y="140" font-family="Georgia Italic" font-size="60" text-anchor="middle" fill="red">SVG</text>
</svg>`);
        });
        it('should take 3 parameters and display them properly on the circle shape', () => {
            const shape = new Circle("EG", 'lightblue', 'black');
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="98" fill="black" stroke="black" stroke-width="2"/>
<text x="150" y="122" font-family="Georgia Italic" font-size="60" text-anchor="middle" fill="lightblue">EG</text>
</svg>`);
        });
        it('should take 3 parameters and display them properly on the reactangle shape', () => {
            const shape = new Rectangle("IT", '#000', 'lightgreen');
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="25" width="200" height="150" fill="lightgreen" stroke="black" stroke-width="2"/>
<text x="150" y="125" font-family="Georgia Italic" font-size="60" text-anchor="middle" fill="#000">IT</text>
</svg>`);
        });
    })
});