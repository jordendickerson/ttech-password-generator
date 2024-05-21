const generateButton = document.getElementById("generate");
const passwordOutput = document.getElementById("password");
const uppercaseButton = document.getElementById("uppercase-button");
const numbersButton = document.getElementById("numbers-button");
const symbolsButton = document.getElementById("symbols-button");

generateButton.addEventListener("click", generatePass);

function generatePass() {
  let length = parseInt(document.getElementById("length").value);
  let password = "";
  let charSet = "abcdefghijklmnopqrstuvwxyz";
  let includeNumbers = numbersButton.checked;
  let includeUppercase = uppercaseButton.checked;
  let includeSymbols = symbolsButton.checked;

  if (includeNumbers) charSet += "1234567890";
  if (includeUppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeSymbols) charSet += "!@#$%^&*()_+{};~?,./";

  const charArr = charSet.split("");

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charArr[randomIndex];
  }
  passwordOutput.value = password;
}
