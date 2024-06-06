const word = document.querySelector("input")
const button = document.querySelector("button")
const result = document.querySelector(".result")


const checkPalindrome = () => {
    const cleanstr = word.value.toLowerCase().replace(/[^a-z0-9]/g,'')
    const reversed = cleanstr.split('').reverse().join('')
    if (cleanstr === reversed) {
        result.innerText = `${word.value} is a Palindrome`
    }
    else {
        result.innerText = `${word.value} is not a Palindrome`
    }
}

button.addEventListener("click", checkPalindrome)