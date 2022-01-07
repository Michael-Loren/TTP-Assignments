
const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");


form.addEventListener("submit", (event) => {
    document.getElementById("correctpass").innerText = "";
    if (password.value === "123456789"){
        document.getElementById("correctpass").innerText = "you got the right password";
    } 
    else
    {
        alert("wrong password dingus");
    }
    event.preventDefault();
});
