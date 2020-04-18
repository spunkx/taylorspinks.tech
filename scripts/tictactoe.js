


const boxy = document.querySelector('.tictactoe');
const executebtn = boxy.querySelector('.execute');

executebtn.addEventListener('click', (e) => {
    if(((boxy.querySelector('.inputX').length) || (boxy.querySelector('.inputY').) == 0)){
        document.querySelector('.emptyFields').innerHTML = "workplease";
    }
    else{
        runtictactoe();
    }
})

function runtictactoe(){
    //2d array of numbers,  
    //0,2 1,2 2,2
    //0,1 1,1 2,1
    //0,0 1,0 2,0

    //maybe merge into arrow function later
    x = 3;
    y = 3;
    xyValue = x*y;
    let grid =  new Array();

    //make grid recursively
    function makeGrid(grid, lengthX, xy, xIter, yIter){
        //make three copies of each line
        //lineX(n) onto lineX(n)
        grid.push([xIter,yIter]);
        if(xy > 0){
            if((xy % lengthX.length === 0) && (xy != (lengthX.length * lengthX.length))){
                xIter = 0;
                //when mod 0 if not at the start, then set iter to zero
                //then set LineX[0..3] to LineY[0..3]
                //do again
                makeGrid(grid, lengthX, xy-1, xIter, yIter+1)
            }
            else{
                makeGrid(grid, lengthX, xy-1, xIter+1, yIter);
            }
        }
        return grid;
    }

    grid = makeGrid(grid, x, xyValue, 0, 0);

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
}