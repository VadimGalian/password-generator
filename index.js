const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generatePasswordEl = document.getElementById("gen_password");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const passwordLengthEl = document.getElementById("password_length");
const inputAlertEl = document.getElementById("input-alert");
generatePasswordEl.addEventListener("click", getRandomPasswords);

function getRandomPasswords() {
  reset();
  let length1 = passwordLengthEl.value;
  let length2 = Math.floor(Math.random() * 16) + 5;

  if (length1 > 20 || length1 < 5) {
    passwordLengthEl.value = "";
    passwordLengthEl.placeholder = "Incorrect password length";
    inputAlertEl.style.display = "block"
    return;
  }

  let randomPassword1 = generateRandomPassword(length1);
  let randomPassword2 = generateRandomPassword(length2);
  password1El.textContent = randomPassword1;
  password2El.textContent = randomPassword2;
}

function generateRandomPassword(length) {
  let password = "";

  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * characters.length);
    password = password + characters[rand];
  }

  return password;
}

function reset() {
  password1El.textContent = "";
  password2El.textContent = "";
  inputAlertEl.style.display = "none"
}
