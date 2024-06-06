const redSlider=document.querySelector("#redSlider")
const greenSlider=document.querySelector("#greenSlider")
const blueSlider=document.querySelector("#blueSlider")

const redValueSpan=document.querySelector("#redValue")
const greenValueSpan=document.querySelector("#greenValue")
const blueValueSpan=document.querySelector("#blueValue")

const colorBox=document.querySelector(".color-box")
const copyButton=document.querySelector("#copyButton")
const inputTypeRGBValue=document.querySelector("#inputType")


redSlider.addEventListener('input',updateColor)
greenSlider.addEventListener('input',updateColor)
blueSlider.addEventListener('input',updateColor)
copyButton.addEventListener('click',copyRGBValue)



function updateColor(){
    const redValue=redSlider.value;
    const greenValue=greenSlider.value;
    const blueValue=blueSlider.value;
    
    const rgbColor=`rgb(${redValue},${greenValue},${blueValue})`

    colorBox.style.backgroundColor=rgbColor

    redValueSpan.textContent=redValue
    greenValueSpan.textContent=greenValue
    blueValueSpan.textContent=blueValue

    inputTypeRGBValue.innerText=rgbColor

}
updateColor()

function copyRGBValue(){
    const redValue=redSlider.value;
    const greenValue=greenSlider.value;
    const blueValue=blueSlider.value;

    const rgbColor=`rgb(${redValue},${greenValue},${blueValue})`

    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert("Color is copied to Clipboard : " + rgbColor)
    })
    .catch((error=>{
        console.error("Failed to Copy due to : ",error)
    }))
}