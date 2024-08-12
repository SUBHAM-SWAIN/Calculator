let keys = document.querySelectorAll(".key");
let screen = document.querySelector("#SCREEN");
let str = "";

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      str = eval(str);
      screen.innerText = str;
    } else if (e.target.innerText == "RESET") {
      str = "";
      screen.innerText = str;
    } else {
      str = str + e.target.innerText;
      screen.innerText = str;
    }
  });
});
