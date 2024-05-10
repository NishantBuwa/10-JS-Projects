const inc_btn=document.querySelector("#increment")
const dec_btn=document.querySelector("#decrement")
const rst_btn=document.querySelector("#reset-btn")


const counter_display=document.querySelector("#counterDisplay")
let counterValue=0

const incrementCounter=()=>{
    counterValue++
    counter_display.innerText=counterValue
    console.log("hi")
}
const decrementCounter=()=>{
    counterValue--
    counter_display.innerText=counterValue
}
const resetCounter=()=>{
    counterValue=0
    counter_display.innerText=counterValue
}
inc_btn.addEventListener("click",incrementCounter)
dec_btn.addEventListener("click",decrementCounter)
rst_btn.addEventListener("click",resetCounter)