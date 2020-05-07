/*
drawShape -
    vertices - coordinates

*/
//ordinarily https://www.w3schools.com/graphics/canvas_drawing.asp

//lineLocationX & lineLocationY = where you want my line on the screen
//https://www.w3resource.com/html5-canvas/html5-canvas-lines.php
function drawLine(iter, lineLength, selector, direction){
    let ctx = selector.getContext("2d");
    //for now direction is a string, but later will change to a degrees or radians measurement
    if(direction === "hoz"){
        ctx.moveTo(0, iter);
        ctx.lineTo(lineLength, iter);
        ctx.stroke();
    }
    else if(direction === "vert"){
        ctx.moveTo(iter, 0);
        ctx.lineTo(iter, lineLength);
        ctx.stroke();
    }
    //must invert lineLength with x
}

/*
create shape of n vertices
//see note book for a working theory on even vertices 

function createTriangle(){

}

function createCircle(){

}*/