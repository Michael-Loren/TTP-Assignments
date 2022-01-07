const form = document.getElementById("form");
const email = document.getElementById("inputEmail3");


form.addEventListener("submit", (event) => {
    console.log(email.nodeValue()) //dumb
    event.preventDefault();
});
