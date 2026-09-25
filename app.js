// const display = document.querySelector("#inputDiv input");
// const buttons = document.querySelector(".BtnMainDive");

// let expression = "";

// function updateDisplay(value = expression) {
//   display.value = value;
// }

// buttons.addEventListener("click", (event) => {
//   const button = event.target.closest(".btns");

//   if (!button) {
//     return;
//   }

//   const value = button.id;

//   if (value === "AC") {
//     expression = "";
//     updateDisplay();
//     return;
//   }

//   if (value === "C") {
//     expression = expression.slice(0, -1);
//     updateDisplay();
//     return;
//   }

//   if (value === "=") {
//     if (!expression || !/^[0-9+\-*/%. ]+$/.test(expression)) {
//       return;
//     }

//     try {
//       expression = String(eval(expression));
//       updateDisplay();
//     } catch {
//       expression = "";
//       updateDisplay("Error");
//     }
//     return;
//   }

//   expression += value === "x" ? "*" : value;
//   updateDisplay(expression);
// });

const screenValue= document.querySelector("input")
const buttons= document.querySelectorAll(".BtnMainDive")
console.log(screenValue.value);

const updateScreen=()=>{
  buttons.forEach(element => {
    
    element.addEventListener("click",(e)=>{
const getMe=e.target.id
console.log(getMe);
console.log(screenValue.type);
if (!getMe) {
  return
}
  if(getMe == "="){

    String(eval( screenValue))

}
if(getMe){
  screenValue.value+=getMe

}



  });

})
}
updateScreen()