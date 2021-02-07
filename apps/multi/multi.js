const lindigo = "#CCCCFF";
const myBlack = "#111111";
const indigo = "#AAAADD";
let nums = document.querySelector("#nums");

let selectedRow = 0;
let selectedCol = 0;

let colDivs;
let rowDivs;

function row(n) {
    reset();
    selectedRow = n;
    rowDivs = document.querySelectorAll(`div[data-row='${selectedRow}']`);
    rowDivs.forEach(function (element) {
        element.style.backgroundColor = lindigo;
        element.style.color = myBlack;
    });
    if (selectedCol != 0) {
        colDivs = document.querySelectorAll(`div[data-col='${selectedCol}']`);
        colDivs.forEach(function (element) {
            element.style.backgroundColor = lindigo;
            element.style.color = myBlack;
        });

        rowDivs[selectedCol-1].style.backgroundColor = indigo;
    }
}
function col(m) {
    reset();
    selectedCol = m;
    colDivs = document.querySelectorAll(`div[data-col='${selectedCol}']`);
    colDivs.forEach(function (element) {
        element.style.backgroundColor = lindigo;
        element.style.color = myBlack;
    });

    if (selectedRow != 0) {
        rowDivs = document.querySelectorAll(`div[data-row='${selectedRow}']`);
        rowDivs.forEach(function (element) {
            element.style.backgroundColor = lindigo;
            element.style.color = myBlack;
        });

        colDivs[selectedRow-1].style.backgroundColor = indigo;

    }
}
function reset() {
    nums.innerHTML = "";
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            let num = document.createElement("div");
            num.setAttribute(`data-row`, i);
            num.setAttribute(`data-col`, j);
            num.classList.add("product");
            num.style.transition = "all 0.2s ease-in";

            let prod = document.createElement("p");
            prod.classList.add("value");
            prod.innerText = `${i * j}`;

            num.append(prod);
            nums.append(num);
        }
    }
}
function resetAll() {
    selectedCol = 0;
    selectedRow = 0;
    reset();
}
reset();