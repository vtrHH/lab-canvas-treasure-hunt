const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
    context.strokeStyle = 'grey';
  for (let x = 0; x < 11; x++) {
    context.beginPath();
    context.moveTo(x * 50, 0);
    context.lineTo(x * 50, width);
    context.closePath();
    context.stroke();
  }
  for (let y = 0; y < 11; y++) {
    context.beginPath();
    context.moveTo(0, y * 50);
    context.lineTo(height, y * 50);
    context.closePath();
    context.stroke();
  }
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();


// Iteration 2 - Class for Characters

let startingRow = 0;
let startingColumn = 0;

class Character {
    constructor (col, row) {
        this.col = col;
        this.row = row;
    }
moveUp() {
    startingRow -= 50;
}

moveDown() {
    startingRow += 50;
}

moveRight() {
    startingColumn += 50;
}

moveLeft() {
    startingColumn -= 50;
}
}

// Iteration 3 - Drawing the player

const playerImage = new Image();
playerImage.scr = 'images/character-down.png'
context.drawImage(playerImage, 100, 100);


/*function drawPlayer (col, row) {
    playerImage.addEventListener('load', () => {

        
}
}

drawPlayer(1,0);
*/