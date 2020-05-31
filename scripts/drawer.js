
//ordinarily https://www.w3schools.com/graphics/canvas_drawing.asp

//lineLocationX & lineLocationY = where you want my line on the screen
//https://www.w3resource.com/html5-canvas/html5-canvas-lines.php
function drawLine(locX, locY, distance, selector, direction){
    //selector = boxy.querySelector(selector);

    let ctx = selector.getContext("2d");
    //for now direction is a string, but later will change to a degrees or radians measurement
    if(direction === "hoz"){
        ctx.beginPath();
        //ctx.moveTo(locX, locY); lines width of box
        ctx.moveTo(0, locY);
        ctx.lineTo(distance, locY);
        ctx.strokeStyle = "green";
        ctx.stroke();
    }
    else if(direction === "vert"){
        ctx.beginPath();
        ctx.moveTo(locX, 0);
        ctx.lineTo(locX, distance);
        ctx.strokeStyle = "green";
        ctx.stroke();
    }
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