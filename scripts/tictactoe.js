


const boxy = document.querySelector('.tictactoe');
const executebtn = boxy.querySelector('.execute');
//another selector for the textboxes.

executebtn.addEventListener('click', (e) => {
    //the problem is that I need to tell the browser to check the textbox when it is selected in order to get the text
    //probably going to need it to be in a form, or come up with a way to do it without a form. I shouldn't need a form as I am not doing a post req
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    if((boxy.querySelector('.inputX').value.length || boxy.querySelector('.inputY').value.length) == 0){
        document.querySelector('.emptyFields').innerHTML = "<b>Please enter two integers!</b>";
        console.log("Please enter two integers!");
    }
    else if(!Number.isInteger(Number(boxy.querySelector('.inputX').value)) || !Number.isInteger(Number(boxy.querySelector('.inputY').value))){
        document.querySelector('.emptyFields').innerHTML = "";
        document.querySelector('.emptyFields').innerHTML = "<b>Please enter integer values only!</b>";
        console.log("Please enter integer values only!");
    }
    else{
        document.querySelector('.emptyFields').innerHTML = "";
        //check for integer
        x = boxy.querySelector('.inputX').value;
        y = boxy.querySelector('.inputY').value;
        runtictactoe(x,y);
    }
})

function runtictactoe(x, y){
    //2d array of numbers,  
    //0,2 1,2 2,2
    //0,1 1,1 2,1
    //0,0 1,0 2,0

    //maybe merge into arrow function later
    xyValue = x*y;
    let grid =  new Array();
    grid = makeGrid(grid, x, xyValue, 0, 0);
    console.log(grid);


}

    //make grid recursively
    //Constant "X"
function makeGrid(grid, X, xy, xIter, yIter){
    grid.push([xIter,yIter]);
    xy = xy-1;
    if(xy > 0){
        if(xy % X === 0 && xy != X*X){
            xIter = 0;
            makeGrid(grid, X, xy, xIter, yIter+1)
        }
        else{
            makeGrid(grid, X, xy, xIter+1, yIter);
        }
    }
    return grid;
}
/*interesting configuration
function makeGrid(grid, X, xy, xIter, yIter){
    if(xy > 0){
        if(xy % X === 0 && xy != X*X){
            xIter = 0;
            makeGrid(grid, X, xy-1, xIter, yIter+1)
            grid.push([xIter,yIter]);
        }
        else{
            grid.push([xIter,yIter]);
            makeGrid(grid, X, xy-1, xIter+1, yIter);
        }
    }
    return grid;
}
*/



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