// create a grid 16 x 16 in js
// greate HTML div, make a flex grid
// create the css grid within js
let color = "orange"

function createBoard(size) {
    const grid = document.querySelector(".grid")
grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let numberOfSquares = size * size;
for (let i = 0; i < numberOfSquares; i++) {
    let square = document.createElement('div')
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = "white"
    
    grid.insertAdjacentElement("beforeend", square);
}
}

// give each div a background color

// create a function that will chnage the size of the grid
// onclick event that will fire a function to change the loop size.

function changeGridSize(inputValue) {
    let size = inputValue
    if (size >= 2 && size <= 100) {
        createBoard(size)
    } else {
        alert('Size must be between 2 and 100')
    }
   
}

function colorSquare() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else this.style.backgroundColor = color;
}

function changeColor(inputColor) {
    color = inputColor
    
}

// function randomColor() {
//     let colorArray = ["yellow", "green", "orange", "red", "blue", "purple"]
//     let computerChoice = Math.floor(Math.random() * 7)
//     let result = colorArray[computerChoice]
//     return result
// }



function reset() {
    let grid = document.querySelector(".grid")
    let squares = grid.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "white")
    
}
// create a chnage of background when divs are hovered over

// 