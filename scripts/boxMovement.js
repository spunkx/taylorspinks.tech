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

/*
var map = {}
onkeydown = onkeyup = function(e){
    //map idea from https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript
    //pushdown left-> pushdown shift results in being stuck in the if statement from line 33 to line 38
    e = e || event;
    map[e.keyCode] = e.type == 'keydown';
    console.log("e.keyCode", e.keyCode)
    console.log("e.type", e.type)
    console.log(map)
    if(e.keyCode == 16 && e.type == 'keydown'){
        movementSpeed = 5;
        movementSpeed = movementSpeed / 0.25;
        //when the shift key is pressed while the arrow key is pressed, the program loops
        console.log("on key down " + movementSpeed)

    }
    else if(e.keyCode == 16 && e.type == 'keyup'){
        movementSpeed = 5
        console.log("on key up " + movementSpeed)
    }
    else if(e.keyCode == 37 && e.type == 'keydown'){
        console.log("on left key " + movementSpeed)
        boxSelector.style.left = (parseFloat(boxSelector.style.left.replace("px", ""))-movementSpeed) + "px";
    }
    else if(e.keyCode == 39 && e.type == 'keydown'){
        console.log("on right key " + movementSpeed)
        boxSelector.style.left = (parseFloat(boxSelector.style.left.replace("px", ""))+movementSpeed) + "px";
    }
    else if(e.keyCode == 38 && e.type == 'keydown'){
        console.log("on up key " + movementSpeed)
        boxSelector.style.top = (parseFloat(boxSelector.style.top.replace("px", ""))-movementSpeed) + "px";
    }
    else if(e.keyCode == 40 && e.type == 'keydown'){
        console.log("on down key " + movementSpeed)
        boxSelector.style.top = (parseFloat(boxSelector.style.top.replace("px", ""))+movementSpeed) + "px";
    }
}*/

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
    console.log("i is currently!", i)
    if (n == 1){
        return i;
    }
    else{
        return isI(i,n-1);
    }
}
console.log("value of recursive calls", isI(i,n));


//towers of hanoi?

const diskNum = 3; //number of moves is 7 because 
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
//towerA.forEach(ele => console.log(ele));
let num = towerA.length;
//stack storage for recording moves, push and pop (shift is correct in JavaScript)
//fix up incorrect order for tower of hanoi
function sortTower(towerA, towerC, towerB, n, numMoves){
    //https://en.wikipedia.org/wiki/Tower_of_Hanoi
    if(n > 0){
        sortTower(towerA, towerB, towerC, n-1);
        var temp = towerA.shift();
        towerC.push(temp);
        console.log(towerA, towerB, towerC);
        sortTower(towerB, towerC, towerA, n-1);
    }
    return towerC;
}

console.log(sortTower(towerA, towerB, towerC, diskNum, 0));






