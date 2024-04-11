const amount = document.querySelector("#amount")
const rate = document.querySelector("#interest")
const term = document.querySelector("#months")
const btn = document.querySelector("button")


btn.addEventListener("click", calculate = (e) => {
    e.preventDefault()
    const loan_amount = parseFloat(amount.value)
    const interest_rate = parseFloat(rate.value)
    const loan_term = parseFloat(term.value)

    if (isNaN(loan_amount) || isNaN(interest_rate) || isNaN(loan_term))
        alert("Please Enter Valid Numbers")
    else {
        const monthly_interest_rate = interest_rate / 100 / 12
        const totalPayment = loan_term
        const monthlyPayment = (loan_amount * monthly_interest_rate) / (1 - Math.pow(1 + monthly_interest_rate, -totalPayment))
        const totalInterest = (monthlyPayment * totalPayment) - loan_amount


        display(monthlyPayment, totalInterest,)
    }
})

const display = (monthlyPayment, totalInterest,) => {
    const result = document.querySelector(".small-box")
    result.innerHTML = `
    <p>Monthly Payment : ${monthlyPayment.toFixed(3)}</p>
    <p>Total Interest : ${totalInterest.toFixed(3)}</p>
    `
}