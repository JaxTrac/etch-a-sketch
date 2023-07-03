
let resetButton = document.createElement("button");
resetButton.textContent = "Reset!";
document.body.appendChild(resetButton);



function createDivs(size) {
    for (let i = 0; i < size; i++) {
        let rowDivs = document.createElement("div");
        rowDivs.classList.add("rows");
        document.body.appendChild(rowDivs);
        for (let j = 0; j < size; j++) {
            let columnDivs = document.createElement("div");
            columnDivs.classList.add("columns")
            rowDivs.appendChild(columnDivs);
        }
    }
    let columns = document.querySelectorAll(".columns");

    columns.forEach(function(column) {
    column.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
    });
});
}

resetButton.onclick = function () {
    let rows = document.querySelectorAll(".rows")
    rows.forEach(function(row) {
        document.body.removeChild(row);
    });
    let sizeField = prompt("Test");
    while (sizeField > 100 || sizeField < 0) {
        sizeField = prompt("Try Again!")
    } 
    createDivs(sizeField);
}



