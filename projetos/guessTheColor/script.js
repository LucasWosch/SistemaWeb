

let colorChoiced;
function getRandomNumber(max) {
return Math.floor(Math.random() * max);
}

function choiceColor()
{

let colorOpitonsAmout   = document.getElementsByClassName("color-option").length
let numberChoiced       = getRandomNumber(colorOpitonsAmout)
return document.getElementsByClassName("color-option")[numberChoiced].innerHTML

}

function submitColor()
{
let tryAmount = document.getElementById("try-amounts").innerHTML;
document.getElementById("try-amounts").innerHTML = parseInt(tryAmount) + 1
let colorPicked         = document.getElementById("input-color").value;

if(colorPicked == colorChoiced){
    document.body.style.backgroundColor = colorChoiced;
    document.getElementById('button-submit-color').disabled = true
    document.getElementById('input-color').disabled = true
    document.getElementById('try-again-button').style.display = "block"
    alert("You guessed color!")
}
}

window.onload = function() {

colorChoiced = choiceColor();
console.log(colorChoiced)
}