const textE = document.getElementById('textarea');
const all = document.getElementById('total');
const rem = document.getElementById('remaining');

textE.addEventListener("keyup", ()=>{

   addChar();

})

function addChar(){
    all.innerText = textE.value.length;
    rem.innerText=textE.getAttribute('maxLength') - textE.value.length; 
}