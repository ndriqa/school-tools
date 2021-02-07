let mousePosition;
let offset = [0,0];
let isDown = false;
let pikaID;
let pika;

let pikat = document.querySelectorAll(".pika");
let paneli = document.querySelector("#boshti-koordinativ");

const canvas = document.querySelector("#canvas");
const cm = 38;
const rad = 57.29;

pikat.forEach(element => {
    element.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            element.offsetLeft - e.clientX,
            element.offsetTop - e.clientY
        ];
        pikaID = element.id;
    }, true);
});

paneli.addEventListener('mouseup', function() {
    isDown = false;
}, true);

paneli.addEventListener('mousemove', function(event) {
    event.preventDefault();
    pika = document.querySelector(`#${pikaID}`)
    if (isDown) {
        mousePosition = {
            
            x : event.clientX,
            y : event.clientY
            
        };
        pika.style.left = (mousePosition.x + offset[0]) + 'px';
        pika.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
    draw();
}, true);

function ngushte(){
    pikat[0].style = `top: ${4*cm}px; left: ${2*cm}px;`
    pikat[1].style = `top: ${2*cm}px; left: ${8*cm}px;`
    pikat[2].style = `top: ${5*cm}px; left: ${8*cm}px;`
    draw();
}
function drejte(){
    pikat[0].style = `top: ${2*cm}px; left: ${2*cm}px;`
    pikat[1].style = `top: ${5*cm}px; left: ${2*cm}px;`
    pikat[2].style = `top: ${5*cm}px; left: ${6*cm}px;`
    draw();
}
function gjere(){
    pikat[0].style = `top: ${5*cm}px; left: ${2*cm}px;`
    pikat[1].style = `top: ${2*cm}px; left: ${5*cm}px;`
    pikat[2].style = `top: ${5*cm}px; left: ${8*cm}px;`
    draw();
}

let a;
let b;
let c;

let radius = pikat[0].getBoundingClientRect().width/4;

let off = canvas.getBoundingClientRect();
canvas.width = off.width;
canvas.height = off.height;

let r = off.width/canvas.width;



console.log(r);
function draw() {
    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;
    a = pikat[0].getBoundingClientRect();
    b = pikat[1].getBoundingClientRect();
    c = pikat[2].getBoundingClientRect();

    // set line stroke and line width
    ctx.strokeStyle = 'lavender';
    ctx.lineWidth = 3;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo((a.x - off.x  + radius)/r, (a.y - off.y + radius)/r);
    ctx.lineTo((b.x - off.x + radius)/r, (b.y - off.y + radius)/r);
    ctx.lineTo((c.x - off.x + radius)/r, (c.y - off.y + radius)/r);
    ctx.lineTo((a.x - off.x + radius)/r, (a.y - off.y + radius)/r);
    ctx.stroke();

    update();
}
let brinjaa = document.querySelector("#brinjaa");
let brinjab = document.querySelector("#brinjab");
let brinjac = document.querySelector("#brinjac");

let alfa = document.querySelector("#alfa");
let beta = document.querySelector("#beta");
let gama = document.querySelector("#gama");

let gjata;
let gjatb;
let gjatc;

let cma;
let cmb;
let cmc;

function update(){
    gjata = Math.sqrt(Math.pow(a.x-b.x, 2)+Math.pow(a.y-b.y, 2));
    gjatb = Math.sqrt(Math.pow(b.x-c.x, 2)+Math.pow(b.y-c.y, 2));
    gjatc = Math.sqrt(Math.pow(c.x-a.x, 2)+Math.pow(c.y-a.y, 2));

    cma = gjata/cm;
    cmb = gjatb/cm;
    cmc = gjatc/cm;

    brinjaa.innerText = cma.toFixed(1);
    brinjab.innerText = cmb.toFixed(1);
    brinjac.innerText = cmc.toFixed(1);
    
    alfa.innerText = (Math.acos((cmc*cmc+cmb*cmb-cma*cma)/(2*cmb*cmc))*rad).toFixed(0);
    beta.innerText = (Math.acos((cmc*cmc+cma*cma-cmb*cmb)/(2*cma*cmc))*rad).toFixed(0);
    gama.innerText = (Math.acos((cma*cma+cmb*cmb-cmc*cmc)/(2*cmb*cma))*rad).toFixed(0);
}

draw();
update();
