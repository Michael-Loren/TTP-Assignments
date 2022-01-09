const buttons = document.getElementsByClassName("btn");

const btnAddRow = buttons[0];
const btnDelRow = buttons[1];
const btnAddCol = buttons[2];
const btnDelCol = buttons[3];

const selSingle = document.getElementById("single");
const selFill = document.getElementById("fill");
const selAll = document.getElementById("all");
const selDrag = document.getElementById("drag");

const btnFillEmpty = document.getElementById("fillempty");
const btnFillAll = document.getElementById("fillall");


let mouseheld = false;

document.addEventListener("mousedown", () => {
    mouseheld = true;
})
document.addEventListener("mouseup", () => {
    mouseheld = false;
})

const rows = document.getElementsByClassName("row");


let colCount = rows.length;

let currentState = "red"; //default value

function addRow(el) {
    const rowdiv = document.createElement(`div`)
    rowdiv.className = "row";

    //populate empty row
    for (let i = 0; i < colCount; i++) {
        const col = document.createElement(`div`);
        col.className = "col-sm border border-3 border-dark box white";

        rowdiv.appendChild(col) //append columns
    }

    el.appendChild(rowdiv);
    init("click", currentState);
    init("mouseenter", currentState);
}





function addCol() {
    for (let i = 0; i < rows.length; i++) {
        const col = document.createElement(`div`);
        col.className = "col-sm border border-3 border-dark box white";
        rows[i].appendChild(col);

    }
    colCount++;
    init("click", currentState);
    init("mouseenter", currentState);
}

function delCol() {
    for (let i = 0; i < rows.length; i++) {
        rows[i].removeChild(rows[i].lastElementChild);
    }
    colCount--;
}

//I hate this function so much

/**
*
* This function literally just iterates through every cell in the matrix and adds event listeners to everything. It is extremely unoptimized and comparable to bubble sort in the sense that
* it takes less code but more steps as a result.
* @param eventType string representing event
* @param style string representing actual background color
* 
*/
function init(eventType, style) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].children.length; j++) {
            rows[i].children[j].removeEventListener(eventType, () => {

                if (eventType === "mouseenter" && mouseheld) {

                    rows[i].children[j].setAttribute("style", `background-color:${style}`)
                }
                else if (eventType != "mouseenter")
                    rows[i].children[j].setAttribute("style", `background-color:${style}`)
            });

            rows[i].children[j].addEventListener(eventType, () => {
                if (eventType === "mouseenter" && mouseheld) {

                    rows[i].children[j].setAttribute("style", `background-color:${style}`)
                }
                else if (eventType != "mouseenter")
                    rows[i].children[j].setAttribute("style", `background-color:${style}`)
            });
        }
    }
}


init("click", currentState);
init("mouseenter", currentState); //initial init



btnAddRow.addEventListener("click", () => addRow(document.querySelector(".content")))

btnDelRow.addEventListener("click", () => rows[rows.length - 1].remove())

btnAddCol.addEventListener("click", () => addCol());

btnDelCol.addEventListener("click", () => delCol());

selSingle.addEventListener("change", (ev) => {
    currentState = ev.target.value;
    init("click", currentState)
})

selDrag.addEventListener("change", (ev) => {
    currentState = ev.target.value;
    init("mouseenter", currentState)
})

btnFillAll.addEventListener("click", () => {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].children.length; j++) {
            rows[i].children[j].setAttribute("style", `background-color:${selAll.value}`)
        }
    }
})

btnFillEmpty.addEventListener("click", () => {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].children.length; j++) {
            if (rows[i].children[j].getAttribute("style") == 'background-color:Transparent' || rows[i].children[j].getAttribute("style") == null)
                rows[i].children[j].setAttribute("style", `background-color:${selFill.value}`)
        }
    }
})