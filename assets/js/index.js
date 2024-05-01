let resetBtn = document.getElementById("reset-cmd");
let randBtn = document.getElementById("rand-cmd");
let plusBtn = document.getElementById("plus-cmd");
let minusBtn = document.getElementById("minus-cmd");

resetBtn.addEventListener('click', resetValue);
randBtn.addEventListener('click', randValue);
plusBtn.addEventListener('click', addValue);
minusBtn.addEventListener('click', subValue);

let value = 0;


function resetValue(){
    value = 0;
    document.getElementById("count-value").innerHTML = value;
}

function randValue(){
    value = getRandInt(100000000);
    document.getElementById("count-value").innerHTML = value;
}

function addValue(){
    value++;
    document.getElementById("count-value").innerHTML = value;
}

function subValue(){
    value--;
    document.getElementById("count-value").innerHTML = value;
}


function getRandInt(max){
    return Math.floor(Math.random() * max);
}
