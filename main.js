let i = 0;
const text = "WELCOME TO SAYEED'S PORTFOLIO";
const speed = 50;

function typing() {
  if (i < text.length) {
    document.getElementById("typingtext").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}
typing();