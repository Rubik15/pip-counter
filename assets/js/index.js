let resetBtn = document.getElementById("reset-cmd");
let randBtn = document.getElementById("rand-cmd");
let plusBtn = document.getElementById("plus-cmd");
let minusBtn = document.getElementById("minus-cmd");

resetBtn.addEventListener('click', resetValue);
randBtn.addEventListener('click', randValue);
plusBtn.addEventListener('click', addValue);
minusBtn.addEventListener('click', subValue);

function resetValue(){
    document.getElementById("count-value").innerHTML = 0;
}

function randValue(){
    document.getElementById("count-value").innerHTML = getRandInt(100000000);
}

function addValue(){
    document.getElementById("count-value").innerHTML++;
}

function subValue(){
    document.getElementById("count-value").innerHTML--;
}


function getRandInt(max){
    return Math.floor(Math.random() * max);
}
