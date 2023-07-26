/* Created by Tivotal */

let colorInputs = document.querySelectorAll(".colors input");
let gradBox = document.querySelector(".gradient-box");
let selectMenu = document.querySelector(".select-box select");
let textarea = document.querySelector("textarea");
let refreshBtn = document.querySelector(".refresh");
let copyBtn = document.querySelector(".copy");

let getRandomColor = () => {
  //generating random colors and return it
  let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};

let generateGradient = (isRandom) => {
  //if is random is true, then getting random colors
  if (isRandom) {
    //passing random colors got as color inputs value
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  //generating color gradient with color input values
  let grad = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradBox.style.background = grad;
  textarea.value = `background: ${grad}`;
};

colorInputs.forEach((input) => {
  input.addEventListener("input", () => {
    //calling generate gradient function
    generateGradient();
  });
});

selectMenu.addEventListener("change", () => {
  generateGradient();
});

refreshBtn.addEventListener("click", () => {
  //calling generate gradient function with true as an argument
  // to generate random gradient
  generateGradient(true);
});

let copyCode = () => {
  //copying text area value to clipboard
  navigator.clipboard.writeText(textarea.value);

  //changing btn text
  copyBtn.innerText = "Code Copied";

  //removing btn text after some interval
  setTimeout(() => (copyBtn.innerText = "Copy"), 1600);
};

copyBtn.addEventListener("click", copyCode);
