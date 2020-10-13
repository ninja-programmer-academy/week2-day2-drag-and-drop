const boxes = document.getElementById("boxes");
for (let i=0; i<=20; i++) {
    let box = document.createElement("div");
    box.draggable = true;
    box.classList.add("box");
    box.style.backgroundColor = Math.floor(Math.random()*16777215).toString(16);
    boxes.appendChild(box);
}

const draggables = document.querySelectorAll('#boxes .box')
const container = document.getElementById('boxes')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })


    draggable.addEventListener('dragover', e => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        console.log(dragging, draggable);
    })
})