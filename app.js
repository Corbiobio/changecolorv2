const background = document.getElementById("fond")
const button = document.getElementById("button")
const reset = document.getElementById("reset")
const span = document.getElementById("span")
const tab = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
let color = "#"
console.log (span)

button.addEventListener("click",function(){

    for(let i = 0; i <6;i++){
        color = color + tab[Math.floor(Math.random()*16)]
    }
    background.style.backgroundColor = color
    span.innerText = color
    color = "#"
})

reset.addEventListener("click",function(){
    background.style.backgroundColor = "white"
    span.innerText = "FFFFFF"

})