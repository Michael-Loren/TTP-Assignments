const buttons = document.getElementsByClassName("btn");

const btnAddRow = buttons[1];
const btnDelRow = buttons[2];
const btnAddCol = buttons[3];
const btnDelCol = buttons[4];






const rows = document.getElementsByClassName("row");


let colCount = rows.length;




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
    init("click", "background-color: green");
}


console.log(rows);


function addCol() {
    for (let i = 0; i < rows.length; i++) {
        const col = document.createElement(`div`);
        col.className = "col-sm border border-3 border-dark box white";
        rows[i].appendChild(col);

    }
    colCount++;
    init("click", "background-color: green");
}

function delCol() {
    for (let i = 0; i < rows.length; i++) {
        rows[i].removeChild(rows[i].lastElementChild);
    }
    colCount--;
}

//I hate this function so much
function init(eventType, style){
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < rows[i].children.length; j++){
            rows[i].children[j].removeEventListener(eventType, () => rows[i].children[j].setAttribute("style", style));
            rows[i].children[j].addEventListener(eventType, () => rows[i].children[j].setAttribute("style", style));
            
        }
    }
}

init("click", "background-color: green");
console.log(`colCount: ${colCount}`);


btnAddRow.addEventListener("click", () => addRow(document.querySelector(".content")))

btnDelRow.addEventListener("click", () => rows[rows.length - 1].remove())

btnAddCol.addEventListener("click", () => addCol());

btnDelCol.addEventListener("click", () => delCol());