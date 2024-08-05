let bgcolor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let btn = document.getElementById("btn");
let color = document.getElementById("color");
let rs = document.getElementById("reset");

btn.addEventListener('click', function(){
    let hexcolor = '#';
    for(let i=0; i<6; i++){
        hexcolor += bgcolor[getRandomNumber()];
    }
    color.textContent = ` ${hexcolor}`;
    document.body.style.background = hexcolor;
});
function getRandomNumber(){
    return Math.floor(Math.random() * bgcolor.length)
}
rs.addEventListener('click', function () {
            let hexcolor = '#FFFFFF';
            color.textContent = ` ${hexcolor}`;
            document.body.style.background = hexcolor;
  
});