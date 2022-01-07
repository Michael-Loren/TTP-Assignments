const buttons = document.getElementsByClassName("btn");

const btnAddRow = buttons[1];
const btnDelRow = buttons[2];
const btnAddCol = buttons[3];
const btnDelCol = buttons[4];






const rows = document.getElementsByClassName("row");


let colCount = 4; //change later








function addRow(el){
    const rowdiv = document.createElement(`div`)
    rowdiv.className = "row";
    //populate empty row
    for(let i = 0; i < colCount; i++){
        const col = document.createElement(`div`);
        col.className = "col-sm border border-3 border-dark box white";
        rowdiv.appendChild(col) //append columns
    }
    el.appendChild(rowdiv);

}


console.log(rows);





console.log(`colCount: ${colCount}`);


btnAddRow.addEventListener("click", () => {
    addRow(document.querySelector(".content"))
} )

btnDelRow.addEventListener("click", () => rows[rows.length-1].remove())