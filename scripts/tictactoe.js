const boxy = document.querySelector('.tictactoe');
const executebtn = boxy.querySelector('.execute');
const gameSelector = boxy.querySelector('.game');
//another selector for the textboxes.

var drawnState = 0;

//delete canvas note and recreate it to refresh it

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
        if(drawnState == 1){
            gameSelector.style.display = "none";
            gameSelector.style.display = "block";
        }
        else{
            gameSelector.style.display = "block";
        }
        //check for integer
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
    //DO NOT USE CSS FOR CANVAS (if you're a noob like me), as existing properties have a parent behavior on any CSS settings set, add unnecessary complication
    maxlineSize = 400; //this needs to be selected off of the html document
    let centreCursor = (1*(maxlineSize/x))/2; //not necessary
    makeGrid(grid, x, xy, 0, 0, maxlineSize, centreCursor);
    gridInteraction(xy); //this must be run after makeGrid
    console.log(grid);
    drawnState = 1;

}

function gridInteraction(xy){
    test = document.getElementsByClassName("game");
    console.log(test[0].childNodes[0]);

    for(i = 0; i != xy; i++){
        console.log("here are my squares!", test[0].childNodes[i]);
        console.log("here are my squares!", test[0].childNodes[i].className);
    }
}


function makeInteractable(x, y, cursor){
    //interactable grid = find centre of grid
    //tag the centre
    //measure 1/2 some division of one line to the next line in both x and y direction
    //define tag as the area of that singular square
    //do this total squares minus 1/n, and then mirror on the left over
    //merge with current implementation for efficiency
    //must convert from grid cords to screen cords (css pixel values)

    //console.log("makeInteractable",x,y);

    let centreBox = document.createElement("div");
    centreBox.setAttribute('class', "a" + String(x) + "a" + String(y));
    gameSelector.append(centreBox);
    // + String(x) + "," + String(y)
    centreDiv = boxy.querySelector("." + "a" + String(x) + "a" + String(y)); //must start with a letter and no commas
    //0 = 1

    //to speed this up: generate for only odd or even parity and the opposite parity is implied?
    centreDiv.style.position = "absolute";
    centreDiv.style.left = String(x*(cursor+cursor))+"px";
    centreDiv.style.top = String(y*(cursor+cursor))+"px";
    centreDiv.style.width = String(cursor+cursor)+"px";
    centreDiv.style.height = String(cursor+cursor)+"px";
    //rather than reusing the DOM, save all the names of the divtags into a map for efficiency
}


function makeGrid(grid, X, xy, xIter, yIter, maxlineSize, centreCursor){
    //make grid recursively, bad idea, better to draw grids iteratively due to the recursion depth
    //make two versions and compare their efficiency
    if(xy == X*X){
        makeInteractable(xIter, yIter, centreCursor);
    }

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
            makeInteractable(xIter, yIter+1, centreCursor);
            makeGrid(grid, X, xy, xIter, yIter+1, maxlineSize, centreCursor);
        }
        else{
            makeInteractable(xIter+1, yIter, centreCursor);
            makeGrid(grid, X, xy, xIter+1, yIter, maxlineSize, centreCursor);
        }
    }

    return grid;
}

//grid garbage collection?

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