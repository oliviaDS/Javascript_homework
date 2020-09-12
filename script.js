// to get password
var password = generatePassword();
var passwordText = document.querySelector("#password");
//passwordText.box = password;
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

function askPasswordLength() {

}

// Write password to the #password input
function writePassword() {
  //1. prompt criteria
  //2. ask user to choose min 8 to max 128 charaters 
  criterias.length = askPasswordLength
  //validate input
  const.length = prompt("enter password min 8 and max 128 characters");
  console.log(length);
  if (length > 8 && length < 128) {
    console.log("this is ok");
    return parseInt(length);
  }
  else {
    //length is not ok
    // password get asked again
    // recursive function: a function that keeps calling
    return askPasswordLength();
  }

  Function repeatString(character.times){
    let result = "";
    for (let index = 0; index < times; index++) { result += generateRandomCharacter(); }
    return result;
  }
  repeatString("a", 10);
  function generatePassword(criterias) {
    Const.length = criteriasObject.length;
    Const.wantLowercase = criterias.wantLowercase;
    Const.wantUppercase = criterias.wantUppercase;
    Const.wantNumbers = criterias.wantNumbers;
    Const.wantSpecialCharacter = criterias.wantSpecialCharacter;
    function generaterRandomCharacter()
    if (wantLowercase) {
      generateRandomCharacter += "abcdefghijklmnopqrstuvwxyz"
    }
    if (wantUppercase) {
      generateRandomCharacter += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    }
    if (wantNumbers) {
      generateRandomNumber += "0123456789"
    }

    if (wantSpecialCharacter) {
      generaterRandomCharacter += "!@#$%&"

    }
    return characters[Math.floor(Math.random() * character.length)]

    //3. ask if lower case,
    criterias.wantLowercase = confirm("Do you wantLowercase?");
    //4. ask if  uppercase, 
    criterias.wantUppercase = confirm("Do you wantUppercase?");
    //5. ask if numeric 
    criterias.wantNumbers = confirm("Do you wantNumbers?");
    //6. ask if  special character !@#$%&
    criterias.wantSpecialCharacter = confirm("Do you wantSpecialCharacter?");
    //7. display the chosen criterias and ask for confimation

    const confirmed = confirm('Please confirm the chosen criterias' + JSON.stringify(criterias));
    //if user click on ok then password is set based on criteria 
    if (confirmed) {
      const password = generatePassword(criterias);
      console.log(password)
    }
    // show in the box
    passwordTextbox.value = passwordText;

  // if user click cancel;  exit

  return;{

  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








