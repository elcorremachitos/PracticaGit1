console.log("Hello, World!");

principalFunction();

function principalFunction() {
    let option = getOperation();
    let number1 = getNumber();
    let number2 = getNumber();

    let result = calculateOperation(option,number1, number2);
}

function getOperation(){
    return parseInt(prompt("1. Suma \n 2. Multiplicacion"));
}

function getNumber(){
    return parseInt(prompt("Ingrese un numero entero"));
}

function calculateOperation(option,number1, number2){
    switch(option){
        case 1:
            return number1+number2;
        case 2:
            return number1*number2;
        default:
            break;
    }
}

function showResult(result){
    alert("El resultado de la operacion es: \n${result}")
}