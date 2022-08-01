console.log(document)

let black_white = document.getElementById('black_white')
let sepia = document.getElementById('sepia')
let blurs = document.getElementById('blur')
let saturate = document.getElementById('saturate')
let image = document.getElementById('image')
// alert("javascript is working !")

function setblack_white() {
    // image.style.filter = 'grayscale(100%)';
    image.style.filter = 'grayscale(100%)';
}
function setsepia() {
    image.style.filter = 'sepia(100%)';
}
function setblur() {
    image.style.filter = 'blur(2px)';
}
function setsaturate() {
    image.style.filter = 'saturate(500%)';
}

black_white.addEventListener('click', setblack_white) ;
sepia.addEventListener('click', setsepia) ;
blurs.addEventListener('click', setblur) ;
saturate.addEventListener('click', setsaturate) ;



