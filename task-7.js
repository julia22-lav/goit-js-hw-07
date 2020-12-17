const inputRef = document.querySelector("#font-size-control")
const spanRef = document.querySelector("#text")
console.log(inputRef)

inputRef.addEventListener("input", changeFontSize)

function changeFontSize(event) {

   console.dir(spanRef.style) 
   spanRef.style.fontSize = event.target.value + "px"
   console.log(spanRef.style.fontSize, event.target.value)
}