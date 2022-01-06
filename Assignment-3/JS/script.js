// 1) Select the section with an id of container without using querySelector.
console.log(document.getElementById("container")); 

// 2) Select the section with an id of container using querySelector.
console.log(document.querySelector("#container"));

// 3) Select all of the list items with a class of "second".
console.log(document.querySelectorAll(".second"));

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
console.log(document.querySelector("ol .third"));

// 5) Give the section with an id of container the text "Hello!". 
document.querySelector("#container").innerHTML = "Hello!";

