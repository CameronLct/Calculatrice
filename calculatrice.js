const prompt = require('prompt-sync')({sigint: true});

let number1;
let number2;
let operateur;
let result;

function askNumber1() {
    number1 = parseInt(prompt('Entrer votre premier nombre : ')); 
}

function askNumber2() {
    number2 = parseInt(prompt('Entrer votre second nombre : '));
}

function askCalcul() {
    operateur = prompt('Entrez l"opérateur : ');
}

function addition(){
    result = number1 + number2;
    return result;
}

function soustraction(){
    result = number1 - number2;
    return result;
}

function multiplication(){
    result = number1 * number2;
    return result;
}

function division(){
    result = number1 / number2;
    return result;
}

askNumber1();
askNumber2();
askCalcul();

if(operateur === "+"){
    addition();
    console.log(result);
}

if(operateur === "-"){
    soustraction();
    console.log(result);
}

if(operateur === "*"){
    multiplication();
    console.log(result);
}

if(operateur === "/"){
    division();
    console.log(result);
}