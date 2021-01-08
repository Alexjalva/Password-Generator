// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordReqs = {};
  passwordReqs = passReqs(passwordReqs);
  console.log(passwordReqs);
  var password = generatePassword(passwordReqs);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Get user requirements function
function passReqs(reqsDict){
  reqsDict = {
    passLen: null,
    charTypes: null,
  }
  reqsDict.charTypes = [true, true, true, true]
  reqsDict.passLen = 10;
  return reqsDict;
}

//Password generation Function
function generatePassword(pReqs){
  const passOptions = [];
  if(pReqs.charTypes[0]){
    passOptions.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  }
  if(pReqs.charTypes[1]){
    passOptions.push("A","B","C","D","E","F","G","H","I","J","K","L","m","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
