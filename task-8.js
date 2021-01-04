const inputRef = document.querySelector("input[type='number']");
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const divRef = document.getElementById("boxes");
// console.dir(inputRef);
// console.dir(btnRenderRef);

inputRef.addEventListener("change", getInputNum);
btnRenderRef.addEventListener("click", createBoxes);
btnDestroyRef.addEventListener("click", destroyBoxes);

let inputNum = 0;
function getInputNum(event) {
  // console.dir(event);
  if (Number(event.target.value) > 0) {
    inputNum = Number(event.target.value);
  }
}

function createBox(size) {
  const newBoxRef = document.createElement("div");
  newBoxRef.style.border = "3px solid " + random_rgb();

  newBoxRef.style.height = size + "px";
  newBoxRef.style.width = size + "px";

  return newBoxRef;
}

function createBoxes() {
  const createdBoxes = [];
  for (let i = 0; i < inputNum; i += 1) {
    const size = 30 + 10 * i;
    createdBoxes.push(createBox(size));
  }
  divRef.append(...createdBoxes);

  // console.dir(divRef);
}

function destroyBoxes() {
  // console.dir(divRef);
  divRef.innerHTML = [];
  inputRef.value = "";
}

function random_rgb() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}
