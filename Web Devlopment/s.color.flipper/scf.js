let color=["Red","Yellow","Blue","Green","Pink"];
let hhh = document.getElementById("hh");
let btn1 = document.getElementById("btn");
btn1.addEventListener('click' , function onClick(event){
    let s = color[randomNumber()];
    btn1.textContent = s;
    document.body.style.background = s;
    event.target.style.color = s;
})
function randomNumber(){
    return Math.floor(Math.random() * color.length) ;
}