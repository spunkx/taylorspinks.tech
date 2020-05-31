const boxy = document.querySelector('.tictactoe');
const executebtn = boxy.querySelector('.execute');
const gameSelector = boxy.querySelector('.game'); //canvas
const canvasWrap = boxy.querySelector('.canvasWrap');
const squares = boxy.querySelector('.squares');
//another selector for the textboxes.

var drawnState = 0;

//delete canvas node and recreate it to refresh it

executebtn.addEventListener('click', (e) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    if((boxy.querySelector('.inputX').value.length || boxy.querySelector('.inputY').value.length) == 0){
        canvasWrap.style.display = "none";
        document.querySelector('.emptyFields').innerHTML = "<b>Please enter two integers!</b>";
        console.log("Please enter two integers!");
    }
    else if(!Number.isInteger(Number(boxy.querySelector('.inputX').value)) || !Number.isInteger(Number(boxy.querySelector('.inputY').value))){
        document.querySelector('.emptyFields').innerHTML = "";
        canvasWrap.style.display = "none";
        document.querySelector('.emptyFields').innerHTML = "<b>Please enter integer values only!</b>";
        console.log("Please enter integer values only!");
    }
    else if(boxy.querySelector('.inputX').value != boxy.querySelector('.inputY').value){
        document.querySelector('.emptyFields').innerHTML = "";
        canvasWrap.style.display = "none";
        document.querySelector('.emptyFields').innerHTML = "<b>This game currently supports x=y only!</b>";
        console.log("This game currently supports x=y only!");
    }
    else{
        document.querySelector('.emptyFields').innerHTML = "";
        if(drawnState == 1){
            canvasWrap.style.display = "none";
            canvasWrap.style.display = "block";
        }
        else{
            canvasWrap.style.display = "block";
        }

        let grid = new Array();
        gameWidth = gameSelector.width;
        //gameHeight = gameSelector.width;
        x = boxy.querySelector('.inputX').value;
        y = boxy.querySelector('.inputY').value;
        grid = generateinteractableGrid(x, y, gameWidth, grid, gameSelector);
        drawGrid(grid, x);

        console.log(grid);
    }
})
