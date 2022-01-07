const leftBtn = document.getElementsByClassName("left")[0].firstElementChild; 
const RightBtn = document.getElementsByClassName("right")[0].firstElementChild;
const displayText = document.querySelector(".sub")

leftBtn.addEventListener("click", () => {
    document.querySelector(".sub").innerHTML = "<p>This color scheme is awful</p>"
    displayText.style.fontFamily = "Times New Roman";
});

leftBtn.addEventListener("mouseenter", () => alert("please don't click i'm an introvert (press esc if you really want to)"))


RightBtn.addEventListener("click", () => {
    document.querySelector(".sub").innerHTML = "<p>Nonsense, it is the pinnacle of modern design</p>";
    displayText.style.fontFamily = "Comic Sans MS";
});



