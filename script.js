const bill = document.querySelector(".bill-form");
const tipPercentageButton = document.querySelectorAll(".btn");
const tipPercentageCustom = document.querySelector(".custombtn");


let userTip = "";

tipPercentageButton.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        userTip = +btn.textContent.replace("%", "");
        const calcResult = calcBill(+bill.value, userTip);
        console.log(calcResult);
    });
});

function calcBill(num1, num2){
   return num1 * num2 / 100;
}


