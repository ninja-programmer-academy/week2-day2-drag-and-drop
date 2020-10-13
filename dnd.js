const boxes = document.getElementById("boxes");
for (let i=0; i<=20; i++) {
    let box = document.createElement("div");
    box.draggable = true;
    box.classList.add("box");
    box.style.backgroundColor = Math.floor(Math.random()*16777215).toString(16);
    boxes.appendChild(box);
}

//use document.querySelectorAll to grab all of our boxes in an array
const draggables = document.querySelectorAll('#boxes .box');

//get the box container
const container = document.getElementById('boxes');

//initialise our drag and drop engine
function initDND() {
    //create a ghost box div for representing where our box will end up
    let ghostBox = document.createElement("div");
    ghostBox.className = "ghost box";

    //loop over each box and give it drag events
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            //give our box that is currently being dragged over a class to help us find it later
            ghostBox.style.backgroundColor = draggable.style.backgroundColor;
            draggable.classList.add('dragging');
        })

        draggable.addEventListener('dragend', () => {
            //remove dragging class
            draggable.classList.remove('dragging');
            if (ghostBox.parentNode) {
                ghostBox.parentNode.removeChild(ghostBox);
            }
        })


        draggable.addEventListener('dragover', e => {
            e.preventDefault();
            const dragging = document.querySelector('.dragging');

            if (dragging === draggable) { return }

            //use getBoundingClientRect() to get box underneath our dragging
            let rect = e.currentTarget.getBoundingClientRect();
            let x = e.clientX - rect.left; //x position within the element.

            //determine whether x position is more left than right and insert ghost box appropriately
            if (x < (rect.width/2)) {
                draggable.parentNode.insertBefore(ghostBox, draggable);
            } else {
                draggable.parentNode.insertBefore(ghostBox, draggable.nextSibling);
            }
        })
    })
}

initDND();