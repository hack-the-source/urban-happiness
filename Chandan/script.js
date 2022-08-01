var file = document.getElementById('file'); 
var preview = document.getElementById('preview');


file.addEventListener('change', function() {   
    preview.src = URL.createObjectURL(this.files[0]); 
}, false); 

function addFilterInvert()
{
    preview.classList.add('invert');
}
function addFilterBlur()
{
    preview.classList.add('blur');
}
function addFilterBnw()
{
    preview.classList.add('bnw');
}
function addFilterSat(){
    preview.classList.add('sat');
}
function addFilterCont(){
    preview.classList.add('cont');
}
function addFilterSepia(){
    preview.classList.add('sepia');
}