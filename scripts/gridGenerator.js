function generateinteractableGrid(x, y, size, grid){
    const X = x;

    let temp = new Array();

    for(i=0; i != x; ++i){
        for(j=i; j != x; ++j){
            let pixelValueX = createscreenValues(i, X, size);
            let pixelValueY = createscreenValues(j, X, size);
            //grid.push([pixelValueX,pixelValueY]);
            //(n^2)-n
            if(i < 1 && j > 0){
                temp.push([pixelValueY,pixelValueX]);
            }
            grid.push([pixelValueX,pixelValueY]);
        }
    }
    return grid.concat(temp);
}

function createscreenValues(generatedValue, X, size){
    let pixelValue = (size/X)*generatedValue;
    return pixelValue;
}
/*
function interactableDivs(){

}*/