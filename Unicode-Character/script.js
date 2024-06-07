function detectChar(){
    const input=document.querySelector("#inputType").value
    const result=document.querySelector("#result")
    result.style.color="black"
    result.style.fontWeight="bold"
    if(input){
        const uniCodeValue=input.charCodeAt(0)
        result.textContent=`The Unicode Value of ${input} is ${uniCodeValue}`
    }else{
        
        result.textContent="Enter a Character !"
        result.style.color="red"
    }
}