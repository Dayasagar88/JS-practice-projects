const passwordBox = document.querySelector("#Password");
const button = document.querySelector(".btn");
const length = 12;
const copiedMsg = document.querySelector("#copiedMsg");
const copyBtn = document.querySelector("#copyBtn");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "1234567890";
const specialSymbol = "!@#$%^&*()_+<>?:";

let allChar = upperCase + lowerCase + number + specialSymbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
    password += number[Math.floor(Math.random() * number.length)];
    password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];
    
    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
    console.log(password);
}

function copyPassword(){
    passwordBox.select();

    navigator.clipboard.writeText(passwordBox.value);
    // alert("Copied", passwordBox.value);
    if(passwordBox.value){
    copiedMsg.classList.add("active");
    setTimeout(() => {
        copiedMsg.classList.remove("active");
    },1000);
    }
}


copyBtn.addEventListener("click", copyPassword);

button.addEventListener("click" ,createPassword);

