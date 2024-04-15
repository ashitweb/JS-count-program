





const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const countlabel = document.getElementById("countlabel");
let count=0;

function increases(){
    count++;
    countlabel.textContent = count;
}

function decreases(){
    count--;
    countlabel.textContent = count;
}

function resets(){
    count = 0;
    countlabel.textContent = count;
}
