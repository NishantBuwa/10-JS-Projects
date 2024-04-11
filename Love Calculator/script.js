const your_name = document.querySelector("#your-name")
const partner_name = document.querySelector("#partner-name")
const result = document.querySelector(".result")
const btn1 = document.querySelector("button")
const describe = document.querySelector("#describe")

let per = 0

const calculate = () => {
    const x = Math.floor((Math.random() * 100) + 1);
    return x.toString()
}
const showresult = () => {
    if (your_name.value === "" || partner_name.value === "") {
        alert("Enter The Name Then Click Calculate")
    }
    else {
        per = calculate()
        result.innerText = `Result : ${per}`
        show_description()
    }
}

const show_description = () => {
    if (per <= 20) {
        describe.innerText = `You both are a Horrible Match`
    }
    if (per > 20 && per <= 50) {
        describe.innerText = `You both are a Bad Match`
    }
    if (per > 50 && per <= 80) {
        describe.innerText = `You both are a Good Match`
    }
    if (per > 80 && per <= 90) {
        describe.innerText = `You both are a Perfect Match`
    }
    if (per > 90 && per <= 100) {
        describe.innerText = `You both are an Excellent Match`
    }
}

btn1.addEventListener("click", showresult)