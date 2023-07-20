//  By Tejas 
const placeholderTexts = [
  "GeeksforGeeks Courses.",
  "Data Structures and Algorithms.",
  "Complete Interview Preparation!!",
  "Learn C++,Java,Python..."
];
const inputElement = document.getElementById("plc");
const loopInterval = 1500;
const letterInterval = 90;
let currentTextIndex = 0;
let loop = true;

function typeAndDisappearText(index, currentCharIndex) {
  if (!loop) return;

  const currentText = placeholderTexts[index];

  if (currentCharIndex >= currentText.length) {
    setTimeout(() => {
      inputElement.setAttribute("placeholder", "");
      setTimeout(() => typeAndDisappearText((index + 1) % placeholderTexts.length, 0), loopInterval);
    }, loopInterval);
  } else {
    const textToShow = currentText.substring(0, currentCharIndex + 1);
    inputElement.setAttribute("placeholder", textToShow);

    setTimeout(() => typeAndDisappearText(index, currentCharIndex + 1), letterInterval);
  }
}

inputElement.addEventListener("focus", function () {
  loop = false;
  inputElement.setAttribute("placeholder", "");
});

inputElement.addEventListener("blur", function () {
  loop = true;
  typeAndDisappearText(currentTextIndex, 0);
});

typeAndDisappearText(currentTextIndex, 0);

function removeCookies() {
  document.getElementById("cookies").classList.add("invisible")
}

