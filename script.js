let previousAction = document.querySelector(".previous-operand");
let display = document.querySelector(".current-operand");

let wasEqualPressed = false;
function clearAfterEqual(){
  display.innerText = "";
}

let buttons = Array.from(document.querySelectorAll("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        previousAction.innerText = "";
        display.innerText = "";
        break;
      case "DEL":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        previousAction.innerText = display.innerText;
        let caculation = eval(display.innerText)
        if(caculation%1 != 0) caculation = caculation.toFixed(3)
        display.innerText = caculation;  
        wasEqualPressed = !wasEqualPressed 
        break;
      default:
        if(wasEqualPressed) {
          clearAfterEqual() 
          wasEqualPressed = !wasEqualPressed
        }
        display.innerText += e.target.innerText;
    }
  });
});
