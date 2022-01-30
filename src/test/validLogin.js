const { response } = require("express");

console.log("test validation login");


function login(){
    const email = "romulo@email.com";
    const password = "123";
    let result = true;
    let response;
    if(result == true){
        response = "validado";
    }else{
        response = "negado";
    }
    return response;
}

const x = login;

console.log(x);