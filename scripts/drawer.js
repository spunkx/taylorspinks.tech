/*
drawShape -
    verticies - coordinates

*/
//ordinarily https://www.w3schools.com/graphics/canvas_drawing.asp

function drawGrid(grid, constX, selector){
    console.log(selector.style.width);
    const sizeofGrid = selector.style.width.replace("px", "");
    const sizeofSquare = sizeofGrid / constX;
    selector.querySelector('.square').style.width = sizeofSquare + "px";


}

/*
create shape of n veriticies
//see note book for a working theory

function createTriangle(){

}

function createCircle(){

}*/