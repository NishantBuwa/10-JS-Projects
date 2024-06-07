const ageCalculatorForm=document.querySelector("#ageCalculator")
const btn=document.querySelector("button")
function calculateAge(){
    const today=new Date()
    const birthdayInput=document.querySelector("#bir").value
    const birthdateParts=birthdayInput.split("-")
    const birthDay=birthdateParts[0]
    const birthMonth=birthdateParts[1]-1
    const birthYear=birthdateParts[2]

    // console.log(birthdateParts)
    const birthDate=new Date(birthYear,birthMonth,birthDay)
    // console.log(birthDate)

    const isValidDate=(date)=>{
        return(
            Object.prototype.toString.call(date)==="[object Date]" && !isNaN(date)
        )
    }

    if(!isValidDate(birthDate)){
        alert("Invalid Date Format : PLease Enter a Valid date in DD-MM-YYYY Format")
        return
    }
    const ageinMilliseconds=today-birthDate
    const ageInSeconds=Math.floor(ageinMilliseconds/1000)
    const ageInMinutes=Math.floor(ageInSeconds/60)
    const ageInHours=Math.floor(ageInMinutes/60)
    const ageInDays=Math.floor(ageInHours/24)
    const ageInWeeks=Math.floor(ageInDays/7)
    const ageInMonths=Math.floor(ageInDays/30.436875)
    const ageInYears=Math.floor(ageInDays/365.25)

    const resultContainer=document.querySelector("#resultContainer")
    const result=document.querySelector("#result")
    result.innerHTML=`
    
    <div class="result-item">
        <span>Age : </span>
        <p>${ageInYears} Years ${ageInMonths%12} Months and ${ageInDays%30} Days</p>
    </div>

    <div class="result-item">
        <span>Month Passed : </span>
        <p>${ageInMonths%12} Months </p>
    </div>

    <div class="result-item">
        <span>Week Passed : </span>
        <p>${ageInWeeks} Weeks</p>
    </div>

    <div class="result-item">
        <span>Days Passed : </span>
        <p>${ageInDays%30} Days</p>
    </div>

    <div class="result-item">
        <span>Hours Passed : </span>
        <p>${ageInHours} Hours</p>
    </div>

    <div class="result-item">
        <span>Minutes Passed : </span>
        <p>${ageInMinutes} Minutes</p>
    </div>

    <div class="result-item">
        <span>Seconds Passed : </span>
        <p>${ageInSeconds} Seconds</p>
    </div>
    
    `
    resultContainer.style.display="block"

}

// ageCalculatorForm.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     calculateAge()
// })

btn.addEventListener("click",(event)=>{
    event.preventDefault()
    calculateAge()
})