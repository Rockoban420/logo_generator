
const inquirer = require ('inquirer');
const fs = require ('fs');
const Shapes = require ('./lib/shapes');
const Circle = Shapes.Circle;
const Triangle = Shapes.Triangle;
const Rectangle = Shapes.Rectangle;


inquirer.prompt ([
    {
        name: 'text',
        message: 'Enter up to 3 characters for logo',
        type: 'input',
        validate: async (input) => {
            if (input.length > 3 || input.length < 1) {
               return 'Please enter a valid input (between 1 and 3 characters)';
            }
            return true;
         }
    }, 
    {
        name: 'textColor',
        message: 'Enter your desired text color',
        type: 'input'
    }, 
    {
        name: 'shape',
        message: 'Which shape would you like to use?',
        type: 'list',
        choices: ['Circle', 'Triangle', 'Rectangle']
    },
    {
        name: 'shapeColor',
        message: 'Enter the color you would like the shape to be',
        type: 'input'
    },
   

]).then (answers => {
    fs.writeFile ('logo.svg', fileGenerator(answers), (err)=>{
        if (err){
            return console.log(err);
        }
        console.log ('Success!');
    })
});

const fileGenerator = ({text, textColor, shape, shapeColor}) => {
    let newShape;
    switch (shape) {
        case 'Circle': 
        newShape = new Circle (text, textColor, shapeColor);
        break;

        case 'Triangle':
        newShape = new Triangle (text, textColor, shapeColor);
        break;

        case 'Rectangle':
        newShape = new Rectangle (text, textColor, shapeColor);
        break;
    }
    
    return `${newShape.render()}`;
}

function index_init() {}

index_init();
