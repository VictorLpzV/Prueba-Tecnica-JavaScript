"use strict";
let imprimirMensajeCumplea├▒os = (num1, num2, array1) => {
    let date = new Date();
    if (date.getDate() == num1 && date.getMonth() + 1 == num2) {
        console.log(array1[0]);
    }
    else {
        console.log(array1[1]);
    }
};
let fechaCumplea├▒os = imprimirMensajeCumplea├▒os(9, 11, ["happy Birthday!!", "Sorry but today is not ur Birthday :C"]);
