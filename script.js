


function createDivs(size) {
    for (let i = 0; i < size; i++) {
        let newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
    }
}

createDivs(8);