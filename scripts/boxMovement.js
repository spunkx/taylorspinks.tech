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


var map = {}
onkeydown = onkeyup = function(e){
    //map idea from https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript
    //pushdown left-> pushdown shift results in being stuck in the if statement from line 33 to line 38
    e = e || event;
    map[e.keyCode] = e.type == 'keydown';
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
}

//create a key combination arrow function

