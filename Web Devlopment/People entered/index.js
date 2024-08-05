let countEL=document.getElementById("count")
let saveEL=document.getElementById("save-el")
let count = 0 
function increment(){
    count += 1
    countEL.textContent = count 
}
function save(){
    let countstr = count + '-'
    saveEL.textContent += countstr
    count=0
    countEL.textContent = count
}
function reset(){
    count=0
    countEL.textContent=count
}