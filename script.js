const bill = document.querySelector(".bill-form");
const tipPercentageButton = document.querySelectorAll(".btn");
const tipPercentageCustom = document.querySelector(".custombtn");
const amountOfPeople = document.querySelector(".people-form");

let userTip = "";
let splitTip = "";

tipPercentageButton.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        userTip = +btn.textContent.replace("%", "");
        const calcResult = calcBill(+bill.value, userTip);
        console.log(calcResult);
        splitTip = splitBill(calcResult, +amountOfPeople.value);
        console.log(splitTip);

    });
});

tipPercentageCustom.addEventListener("input", ()=> {
    userTip = tipPercentageCustom.value;
    const calcResult = calcBill(+bill.value, userTip);
    console.log(calcResult);
    splitTip = splitBill(calcResult, +amountOfPeople.value);
    console.log(splitTip);
});


function splitBill(num1, num2){
    return num1 / num2;
};

function calcBill(num1, num2){
   return num1 * num2 / 100;
};


