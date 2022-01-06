const leftBtn = document.getElementsByClassName("main")[0];
const RightBtn = document.getElementsByClassName("main")[1];
const displayText = document.querySelector(".sub")

leftBtn.addEventListener("click", () => {
    document.querySelector(".sub").innerHTML = "<p>This color scheme is awful</p>"
    displayText.style.fontFamily = "Times New Roman";
});

RightBtn.addEventListener("click", () => {
    document.querySelector(".sub").innerHTML = "<p>Nonsense, it is a beautiful, experimental artstyle</p>";
    displayText.style.fontFamily = "Comic Sans MS";
});


