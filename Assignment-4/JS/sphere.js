const calc = document.getElementById("calc");
const input = document.getElementById("input");
const output = document.getElementById("output");

function getVolume(radius){
    return (4/3) * Math.PI * Math.pow(radius , 3)
}


calc.addEventListener("click", (event) => {
    output.value = getVolume(input.value);
    event.preventDefault();
});

