
//ordinarily https://www.w3schools.com/graphics/canvas_drawing.asp

//lineLocationX & lineLocationY = where you want my line on the screen
//https://www.w3resource.com/html5-canvas/html5-canvas-lines.php
function drawLine(start, end, selector, direction){
    let ctx = selector.getContext("2d");
    //for now direction is a string, but later will change to a degrees or radians measurement
    if(direction === "hoz"){

        //need to use the ACTUAL locations to define the x and y, literally, rather than using an abstract value
        //ctx.strokeStyle = "#00ff00";
        ctx.beginPath();
        ctx.moveTo(0, start);
        ctx.lineTo(end, start);
        ctx.strokeStyle = "green";
        ctx.stroke();
    }
    else if(direction === "vert"){
        ctx.beginPath();
        ctx.moveTo(start, 0);
        ctx.lineTo(start, end);
        ctx.strokeStyle = "green";
        ctx.stroke();
    }
    //tictactoe cross
    else if(direction === "diag"){

    }
    //must invert lineLength with x

}

//tictactoe naught
function drawCurve(x, y, size, selector){
    let ctx = selector.getContext("2d"); 
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, size, 0, Math.PI * 2, false);
}
/*
function eraseLine(){

}*/

/*
create shape of n vertices
//see note book for a working theory on even vertices 

function createTriangle(){

}

function createCircle(){

}*/