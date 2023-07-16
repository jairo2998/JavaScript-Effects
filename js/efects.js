
window.addEventListener('DOMContentLoaded', function() {
    start();
  });

function start() {
    setInterval(function(){
        lines();
    }, 130);
}

function lines() {    
    let e = document.createElement('div');
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);   
    setColor(e);  
    calcSizeW(e);
    calcPositionLeft(e);
    calcSpeed(e);
    finish(e);     
}

function calcSpeed(e) {
    let speed = Math.random() * 3;
    e.style.animationDuration = 2 + speed + 's';    
}

function setColor(e) {
    e.style.background = "rgb(" + color() + "," + color() +"," + color() + ")";    
}


function finish(e) {
    setTimeout(function(){
        document.body.removeChild(e);
    },5000)
}

function calcPositionLeft(e) {
    e.style.left = Math.random() * innerWidth + 'px';    
}

function calcSizeW(e) {
    let sizeW = Math.random() * 12;
    e.style.width = sizeW + 'px';      
}

function color() {
    let color = Math.floor(Math.random() * 255);
    return color;
}



