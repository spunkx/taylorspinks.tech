function generateinteractableGrid(x, y, size, grid){
    const X = x;

    for(i=0; i != x; ++i){
        for(j=0; j != x; ++j){
            //works but mirror j on i... 
            let pixelValueX = createscreenValues(i, X, size);
            let pixelValueY = createscreenValues(j, X, size);
            grid.push([pixelValueX,pixelValueY]);
        }
    }
    return grid;
}

function createscreenValues(generatedValue, X, size){
    let pixelValue = (size/X)*generatedValue;
    return pixelValue;
}
/*
function interactableDivs(){

}*/