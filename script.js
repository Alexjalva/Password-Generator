// Assignment Code
var generateBtn = document.querySelector("#generate");

//Validate user number input
function checkLenInput(pLen){
  if(parseInt(pLen) > 7 && parseInt(pLen) <129){
    return false;
  }
  else{
    return true;
  }
}

//validate user yes or no input
function checkYesNoInput(response){
  let input = response.trim();
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return false;
  }
  else{
    alert("Please answer with yes or no")
    return true;
  }
}

//Get user requirements function
function passReqs(reqsDict){
  reqsDict = {
    passLen: null,
    charTypes: [false, false, false, false],
  }
  while(checkLenInput(reqsDict.passLen) ){
    alert("Password must be at least 8 characters long, and no longer than 128 characters. Please input only numbers.");
    reqsDict.passLen = prompt("Enter the desired length of your password.")
  }
  while(reqsDict.charTypes[0] == false && reqsDict.charTypes[1] == false && reqsDict.charTypes[2] == false && reqsDict.charTypes[3] == false){
    alert("Please respond to the following with 'yes' or 'no'. The following prompts will ask if you would like: lower case letters, upper case letters, numbers, and special characters. You will need to answer yes to at least one.");
    let userResponse = prompt("Would you like lower case letters in your password? (yes/no)");
    while(checkYesNoInput(userResponse)){
      userResponse = prompt("Would you like lower case letters in your password? (yes/no)");
    }
    userResponse= userResponse.trim();
    if(userResponse.toLowerCase() == "yes"){
      reqsDict.charTypes[0] = true;
    }
    userResponse = prompt("Would you like upper case letters in your password? (yes/no)");
    while(checkYesNoInput(userResponse)){
      userResponse = prompt("Would you like upper case letters in your password? (yes/no)");
    }
    userResponse= userResponse.trim();
    if(userResponse.toLowerCase() == "yes"){
      reqsDict.charTypes[1] = true;
    }
    userResponse = prompt("Would you like numbers in your password? (yes/no)");
    while(checkYesNoInput(userResponse)){
      userResponse = prompt("Would you like numbers in your password? (yes/no)");
    }
    userResponse= userResponse.trim();
    if(userResponse.toLowerCase() == "yes"){
      reqsDict.charTypes[2] = true;
    }
    userResponse = prompt("Would you like special characters in your password? (yes/no)");
    while(checkYesNoInput(userResponse)){
      userResponse = prompt("Would you like special characters in your password? (yes/no)");
    }
    userResponse= userResponse.trim();
    if(userResponse.toLowerCase() == "yes"){
      reqsDict.charTypes[3] = true;
    }
  }
  return reqsDict;
}

//Password generation Function
function generatePassword(pReqs){
  const passOptions = [];
  if(pReqs.charTypes[0]){
    passOptions.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  }
  if(pReqs.charTypes[1]){
    passOptions.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }
  if(pReqs.charTypes[2]){
    passOptions.push("1","2","3","4","5","6","7","8","9","0");
  }
  if(pReqs.charTypes[3]){
    passOptions.push("!","\"","#","$","%","&","\'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~");
  }
  let passwordString = "";
  for(let i = 0; i<pReqs.passLen;i++){
    let randomNum=Math.floor(Math.random()*passOptions.length);
    passwordString += passOptions[randomNum];
  }
  return passwordString;
}

// Write password to the #password input
function writePassword() {
  var passwordReqs = {};
  passwordReqs = passReqs(passwordReqs);
  var password = generatePassword(passwordReqs);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
