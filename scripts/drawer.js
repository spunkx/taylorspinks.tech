
//ordinarily https://www.w3schools.com/graphics/canvas_drawing.asp

//lineLocationX & lineLocationY = where you want my line on the screen
//https://www.w3resource.com/html5-canvas/html5-canvas-lines.php
function drawLine(start, end, selector, direction){
    let drawnLine = [];
    let zero = 0; //why this is required to make this work is beyond me
    let ctx = selector.getContext("2d");
    //for now direction is a string, but later will change to a degrees or radians measurement
    if(direction === "hoz"){

        //need to use the ACTUAL locations to define the x and y, literally, rather than using an abstract value
        drawnLine.push("hozLine", {zero, start}, {start, end});
        ctx.moveTo(0, start);
        ctx.lineTo(end, start);
        ctx.stroke();
    }
    else if(direction === "vert"){
        drawnLine.push("vertLine", {start, zero}, {start, end});
        ctx.moveTo(start, 0);
        ctx.lineTo(start, end);
        ctx.stroke();
    }
    //must invert lineLength with x

    return drawnLine
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