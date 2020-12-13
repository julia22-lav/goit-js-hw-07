const btnIncrementRef = document.querySelector('button[data-action="increment"]')
const btnDecrementRef = document.querySelector('button[data-action="decrement"]')
const spanRef = document.getElementById("value")
// console.dir(spanRef)
btnIncrementRef.addEventListener("click", increment)
btnDecrementRef.addEventListener("click", decrement)


function increment(){
    const counterValue = Number(spanRef.textContent)
    spanRef.textContent = counterValue + 1
}

function decrement(){
    const counterValue = Number(spanRef.textContent)
    spanRef.textContent = counterValue - 1
}

