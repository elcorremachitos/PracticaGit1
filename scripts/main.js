console.log("Hello, World!");

principalFunction();

function principalFunction() {
    let option = getOperation();
    let number1 = getNumber();
    let number2 = getNumber();
}

function getOperation(){
    return parseInt(prompt("1. Suma \n 2. Multiplicacion"));
}

function getNumber(){
    return parseInt(prompt("Ingrese un numero entero"));
}