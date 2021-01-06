const inputRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");

inputRef.addEventListener("input", onNameInput);

function onNameInput(event) {
  if (!event.target.value) {
    spanRef.textContent = "незнакомец";
    return;
  }
  // console.dir(event)
  spanRef.textContent = event.target.value;
}
