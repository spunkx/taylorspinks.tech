const boxy = document.querySelector('.tictactoe');
const executebtn = boxy.querySelector('.execute');
const gameSelector = boxy.querySelector('.game');
//another selector for the textboxes.

executebtn.addEventListener('click', (e) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    if((boxy.querySelector('.inputX').value.length || boxy.querySelector('.inputY').value.length) == 0){
        gameSelector.style.display = "none";
        document.querySelector('.emptyFields').innerHTML = "<b>Please enter two integers!</b>";
        console.log("Please enter two integers!");
    }
    else if(!Number.isInteger(Number(boxy.querySelector('.inputX').value)) || !Number.isInteger(Number(boxy.querySelector('.inputY').value))){
        document.querySelector('.emptyFields').innerHTML = "";
        gameSelector.style.display = "none";
        document.querySelector('.emptyFields').innerHTML = "<b>Please enter integer values only!</b>";
        console.log("Please enter integer values only!");
    }
    else if(boxy.querySelector('.inputX').value != boxy.querySelector('.inputY').value){
        document.querySelector('.emptyFields').innerHTML = "";
        gameSelector.style.display = "none";
        document.querySelector('.emptyFields').innerHTML = "<b>This game currently supports x=y only!</b>";
        console.log("This game currently supports x=y only!");
    }
    else{
        document.querySelector('.emptyFields').innerHTML = "";
        //check for integer
        gameSelector.style.display = "block";
        //when dimensions aren't square, use ratio for grid

        x = boxy.querySelector('.inputX').value;
        y = boxy.querySelector('.inputY').value;
        runtictactoe(x,y);
    }
})

function runtictactoe(x,y){
    xy = x*y;
    let grid =  new Array();
    //define boxpixelLength
    //assumes width = height
    //set to equal the width within the html
    //DO NOT USE CSS FOR CANVAS, as existing properties have a parent behavior on any CSS settings set, add unnecessary complication
    maxlineSize = 400;

    grid = makeGrid(grid, x, xy, 0, 0, maxlineSize);

}
    //make grid recursively, bad idea, better to draw grids iteratively due to the recursion depth
    //make two versions and compare their efficiency

function makeGrid(grid, X, xy, xIter, yIter, maxlineSize){
    grid.push([xIter,yIter]);

    if((yIter*X) < X){
        drawLine(xIter*(maxlineSize/X), maxlineSize, gameSelector, "vert");
    }
    else if((yIter*X) == X && (yIter*X) < 2*(X)){
        drawLine(xIter*(maxlineSize/X), maxlineSize, gameSelector, "hoz");
    }
    //xIter or yIter is 0->2 = 3 elements
    if((xIter+1 == X && yIter+1 == X) || (X == 2 && xIter == X-1)){

        drawLine(maxlineSize, maxlineSize, gameSelector, "vert");
        drawLine(maxlineSize, maxlineSize, gameSelector, "hoz");
    }

    xy = xy-1;
    if(xy > 0){
        if(xy % X === 0 && xy != X*X){
            xIter = 0;
            makeGrid(grid, X, xy, xIter, yIter+1, maxlineSize);
        }
        else{
            makeGrid(grid, X, xy, xIter+1, yIter, maxlineSize);
        }
    }
    return grid;
}

/*
function defineSquare(){

}*/




    //user makes selection

    //make a turn system

/*
    function game(turnNum, turn, selectionHistory, gameState, gird){
        console.out("current grid is!", grid);

        //player1 please make a selection!
        //player1 choses a set of coordinates 
        //if player1 it's player2's turn!
        //recursively call until win or draw
        //draw cond is when there is no more possible moves and no one has won
        //win cond is when there is a linear player selection vector equal to the magnitude of x or y

        //game state has two states => inprogress & complete

        //return result

        //checkingMarks logic
        //user places their mark, check surrounding squares for marks when marks equals length of x
        //if neighbour mark is found, call through square to check sequence
        //for other notes refer to physical notepad
    }*/