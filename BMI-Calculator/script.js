
document.querySelector("#btn").addEventListener("click", function (e) {

    const gender = document.querySelector("#select_gender").value
    const age = parseInt(document.querySelector("#age").value)
    const height_feet = parseInt(document.querySelector("#feet").value)
    const height_inch = parseInt(document.querySelector("#inch").value)
    const weight = parseFloat(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    const category = document.querySelector("#category")
    let bmi = 0
    let categorymsg = ""

    if (gender && age && height_feet && height_inch && weight) {
        const heightInMeters = ((height_feet * 12) + height_inch) * .0254
        bmi = weight / heightInMeters ** 2
        if (bmi < 18.5)
            categorymsg = "Underweight"
        else if (bmi >= 18.5 && bmi < 24.9)
            categorymsg = "Normal Weight"
        else if (bmi >= 24.9 && bmi < 29.9)
            categorymsg = "OverWeight"
        else
            categorymsg = "Obesity"

        let resultMsg = `You BMI : ${bmi.toFixed(3)}`
        result.style.color="blue"
        result.innerText = resultMsg

        if (categorymsg === "Underweight")
            category.style.color = "red"
        if (categorymsg === "Normal Weight")
            category.style.color = "green"
        if (categorymsg === "OverWeight")
            category.style.color = "yellow"
        if (categorymsg === "Obesity")
            category.style.color = "darkred"

        category.innerText = categorymsg
    }
    else {
        alert("Fill All Input Fields")
    }
})
