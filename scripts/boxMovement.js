const boxSelector = document.querySelector('.movie');
const leftbtn = boxSelector.querySelector('.leftbtn');
const rightbtn = boxSelector.querySelector('.rightbtn');
const upbtn = boxSelector.querySelector('.upbtn');
const downbtn = boxSelector.querySelector('.downbtn');

var movementSpeed = 5;

boxSelector.style.left = 0 + "px";
boxSelector.style.top = 0 + "px";

leftbtn.addEventListener('click', (e) => {
    boxSelector.style.left = (parseFloat(boxSelector.style.left.replace("px", ""))-movementSpeed) + "px";
})
rightbtn.addEventListener('click', (e) => {
    boxSelector.style.left = (parseFloat(boxSelector.style.left.replace("px", ""))+movementSpeed) + "px";
})
upbtn.addEventListener('click', (e) => {
    boxSelector.style.top = (parseFloat(boxSelector.style.top.replace("px", ""))-movementSpeed) + "px";
})
downbtn.addEventListener('click', (e) => {
    boxSelector.style.top = (parseFloat(boxSelector.style.top.replace("px", ""))+movementSpeed) + "px";
})


let keyDown = document.addEventListener('keydown', (logKey) => {
    if(logKey.keyCode == 37){
        console.log(logKey.keyCode);
        boxSelector.style.left = (parseFloat(boxSelector.style.left.replace("px", ""))-movementSpeed) + "px";
    }
    else if(logKey.keyCode == 39){
        console.log(logKey.keyCode);
        boxSelector.style.left = (parseFloat(boxSelector.style.left.replace("px", ""))+movementSpeed) + "px";
    }
    else if(logKey.keyCode == 38){
        console.log(logKey.keyCode);
        boxSelector.style.top = (parseFloat(boxSelector.style.top.replace("px", ""))-movementSpeed) + "px";
    }
    else if(logKey.keyCode == 40){
        console.log(logKey.keyCode);
        boxSelector.style.top = (parseFloat(boxSelector.style.top.replace("px", ""))+movementSpeed) + "px";
    }

})

let keyUp = document.addEventListener('keyup', (logKey) => {
    //keyDown;
    console.log("key up lol");
})


//me learning recursion
let i = 2;
let n = 2;

function isI(i,n){
    isKill = false;
    i = i*(-10);
    if (n == 1){
        return i;
    }
    else{
        return isI(i,n-1);
    }
}
//console.log("value of recursive calls", isI(i,n));


//towers of hanoi?

const diskNum = 3; //number of moves is 7... why? is a recursive function which is determined by the pervious instance
let startRadius = 1;
var disks = [];
let towerA = [];
let towerB = [];
let towerC = [];

//write some unit tests please me

function getDisks(diskNum, startRadius, disks){
    currRadius = startRadius;
    disks.push(currRadius);
    if(diskNum === 1){
        return disks;
    }
    else{
        let nextRadius = currRadius+1; //moved this statement outside of return for readability
        return getDisks(diskNum-1, nextRadius, disks);
    }
    
}

towerA = getDisks(diskNum, startRadius, disks);
function movement(n, Start, End, Aux, k){
    if(n != 0){
        //head recursion
        movement(n-1, Start, Aux, End, k+1); //head recursion
        //shift and unshift = LILO
        //push and pop = FIFO
        var temp = Start.shift();
        End.unshift(temp);
        return movement(n-1, Aux, End, Start, k+1); //tail recursion
    }
    return towerC;
}
//console.log("----------------------")
//console.log("after sorting", movement(diskNum, towerA, towerC, towerB, 0));


//tic tac toe algorithm Medium
//chess AI? Hard
//quick sort recursive Easy
//The Mandelbrot Set ?
//tower of hanoi using backsubstituion https://www.math.usm.edu/lambers/mat610/sum10/lecture4.pdf ? 
//graphical animation of the tower of hanoi solving path Medium
//turning machine Medium 
//game of life Hard
//generated topographic map Very Hard







