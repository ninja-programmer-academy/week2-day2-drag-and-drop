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

//loop over each box and give it drag events
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        //give our box that is currently being dragged over a class to help us find it later
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', () => {
        //remove dragging class
        draggable.classList.remove('dragging');
    })


    draggable.addEventListener('dragover', e => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');

        //console.log the box being dragged and the box being hovered over
        console.log(dragging, draggable);
    })
})