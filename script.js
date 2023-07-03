


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
}

createDivs(10);