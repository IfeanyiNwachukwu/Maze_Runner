const {Engine, Render, Runner, World, Bodies} = Matter;
const cells = 3;
const width = 600;
const height = 600;

const engine = Engine.create();
const {world} = engine;
const render = Render.create(
    {element : document.body,
    engine: engine,
    options:  {
        wireframes: false,
        width,
        height
    }});

Render.run(render);
Runner.run(Runner.create(),engine);


// Walls
const walls = [
Bodies.rectangle(width/2,0,width,40,{isStatic:true}),
Bodies.rectangle(width/2,height,width,40,{isStatic:true}),
Bodies.rectangle(0,height/2,40,height,{isStatic:true}),
Bodies.rectangle(width,height/2,40,height,{isStatic:true}),
]
World.add(world,walls);

// Maze generation

const grid = Array(cells).fill(null).map(() => Array(cells).fill(false));

const verticals = Array(cells).fill(null).map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1).fill(null).map(() => Array(cells).fill(false));

const startRow =    Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);
console.log(startRow, startColumn);

const stepThroughCell = (row,column) => {

    // If I have visited the cell at [row,colum], then return
    if(grid[row][column]){
        return;
    }

    // Mark this cell as being visited
    grid[row][column] === true;

    // Assemble randomly-ordered list of neighbours
    [row - 1, column],
    [row, column + 1],

    // For each neighbour


    // See if neighbour is out of bounds


    // If we have visited the neighbour, continur to the next neighbour


    // REmove a wall from either horizontals or verticals


    // Visit the next cell

}

stepThroughCell(startRow,startColumn);

