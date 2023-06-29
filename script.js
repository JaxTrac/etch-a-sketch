


function createDivs(size) {
    for (let i = 0; i < size; i++) {
        let rowDivs = document.createElement("div");
        document.body.appendChild(rowDivs);
        for (let j = 0; j < size; j++) {
            let columnDivs = document.createElement("div");
            rowDivs.appendChild(columnDivs);
        }
    }
}

createDivs(8);