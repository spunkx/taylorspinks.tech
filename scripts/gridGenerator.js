function generateinteractableGrid(x, y, size, grid, selector){
    const X = x;

    let temp = new Array();

    for(i=0; i != x; ++i){
        for(j=0; j != x; ++j){
            let pixelValueX = createscreenValues(i, X, size);
            let pixelValueY = createscreenValues(j, X, size);
            grid.push([pixelValueX,pixelValueY]);
        }
    }
    return grid;
}

function drawGrid(grid, x){
    const X = x;
    for(i = 0; i != (grid.length)-X; ++i){
        console.log(grid[i]);
    }
}

function createscreenValues(generatedValue, X, size){
    let pixelValue = (size/X)*generatedValue;
    return pixelValue;
}
/*
function interactableDivs(){

}*/