const inputRef = document.querySelector('#validation-input')
// console.log(inputRef)

inputRef.addEventListener("change", checkLength)

function checkLength (event) {
    // console.dir(event)
    if(event.target.value.length === Number(inputRef.getAttribute("data-length"))){
        inputRef.classList.add("valid")
        inputRef.classList.remove("invalid")
        // console.log(event.target.value.length, Number(inputRef.getAttribute("data-length")))
    } else {
        inputRef.classList.remove("valid")
        inputRef.classList.add("invalid")
        // console.log(event.target.value.length, Number(inputRef.getAttribute("data-length")))
    }
    
}

