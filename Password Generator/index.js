const pwLength = document.getElementById("length");
const cbLowercase = document.getElementById("lowercase");
const cbUppercase = document.getElementById("uppercase");
const cbNumbers = document.getElementById("numbers");
const cbSymbols = document.getElementById("symbols");
const result = document.getElementById("result");
const generate = document.getElementById("generateBtn");

function generatePassword(length, includeLowercase,includeUppercase,includeNumbers,includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$+%'&/()-_=?";
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return "Password length must be at least 1";
    }
    if(allowedChars === ""){
        return "At least 1 set of character needs to be selected";
    }


    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
}

function handleGeneratePassword() {
    const passwordLength = Number(pwLength.value); 
    const includeLowercase = cbLowercase.checked;
    const includeUppercase = cbUppercase.checked;
    const includeNumbers = cbNumbers.checked;
    const includeSymbols = cbSymbols.checked;

    const password = generatePassword(passwordLength, 
                                      includeLowercase, 
                                      includeUppercase, 
                                      includeNumbers,
                                      includeSymbols);

    result.textContent = password; 
    console.log(`Generated password: ${password}`);
}

                                  

