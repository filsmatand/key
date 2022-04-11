function showloader(){
    document.querySelector('.container_loader').classList.add('hedden');
}
setTimeout(showloader,1900);

let toggle= document.querySelector('.toggle');
let body= document.querySelector('body');


toggle.addEventListener('click', function(){
    body.classList.toggle('open');
})

const loady = document.querySelector('.text');
window.onload = function(){
    var lop = window.load;
    console.log(lop);
    if (lop = onload) {
        loady.classList.add('loadys');
    
    }
}  
