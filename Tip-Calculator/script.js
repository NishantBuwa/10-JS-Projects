function calculateTip() {
    const billAmountInput = document.querySelector("#billAmount")
    const serviceRatingSelect = document.querySelector("#serviceRating")
    const splitCountInput = document.querySelector("#splitCount")
    const mealTypeSelect = document.querySelector("#mealType")

    const tipAmountOutput = document.querySelector("#tipAmount")
    const totalAmountOutput = document.querySelector("#totalAmount")
    const amountPerPersonOutput = document.querySelector("#amountPerPerson")

    const billAmount = parseFloat(billAmountInput.value)
    const serviceRating = parseFloat(serviceRatingSelect.value)
    const spiltCount = parseInt(splitCountInput.value)
    const mealType = mealTypeSelect.value
    if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(spiltCount)) {
        tipAmountOutput.textContent = "Please Enter Valid Input"
        totalAmountOutput.textContent = ""
        amountPerPersonOutput.textContent = ""
        return;
    }

    let tip
    switch (serviceRating) {
        case 1:
            tip = billAmount * 0.05
            break;
        case 2:
            tip = billAmount * 0.10
            break;
        case 3:
            tip = billAmount * 0.15
            break;
        case 4:
            tip = billAmount * 0.20
            break;
    }

    if (mealType == "dinner")
        tip += 5

    let totalAmount = billAmount + tip
    let ammountPerPerson = totalAmount / spiltCount

    tipAmountOutput.textContent = `Tip : Rs ${tip.toFixed(2)}`
    totalAmountOutput.textContent = `Total Amount : Rs ${totalAmount.toFixed(2)}`
    amountPerPersonOutput.textContent = `Amount Per Person : Rs ${ammountPerPerson.toFixed(2)}`
}

document.querySelector("#calculateBtn").addEventListener("click", calculateTip)