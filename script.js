const bill = document.querySelector(".bill-form");
const tipPercentageButton = document.querySelectorAll(".btn");
const tipPercentageCustom = document.querySelector(".custombtn");
const amountOfPeople = document.querySelector(".people-form");
const displayTip = document.querySelector(".tip");
const displayTotal = document.querySelector(".total");
const resetButton = document.querySelector(".resetbtn");

let userTip = "";
let splitTip = "";

tipPercentageButton.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        userTip = +btn.textContent.replace("%", "");
        const calcResult = calcBill(+bill.value, userTip);
        const amountOfPeopleValue = +amountOfPeople.value || +amountOfPeople.placeholder;
        splitTip = splitBill(calcResult, amountOfPeopleValue);
        displayTip.textContent = splitTip;
        const totalResult = calcTotalPerPerson(+bill.value, calcResult);
        displayTotal.textContent = totalResult;
    });
});

tipPercentageCustom.addEventListener("input", ()=> {
    userTip = tipPercentageCustom.value;
    const calcResult = calcBill(+bill.value, userTip);
    const amountOfPeopleValue = +amountOfPeople.value || +amountOfPeople.placeholder;
    splitTip = splitBill(calcResult, amountOfPeopleValue);
    displayTip.textContent = splitTip;
    const totalResult = calcTotalPerPerson(+bill.value, calcResult);
    displayTotal.textContent = totalResult;
});


function splitBill(num1, num2){
    let splitResult = num1 / num2;
    return splitResult.toFixed(2);
};

function calcBill(num1, num2){
   return num1 * num2 / 100;
};

function calcTotalPerPerson(num1, num2){
    const amountOfPeopleValue = +amountOfPeople.value || amountOfPeople.placeholder;
    let totalPerPersonResult = (num1 + num2) / amountOfPeopleValue;
    return totalPerPersonResult.toFixed(2);
};


resetButton.addEventListener("click", () => {
    userTip = "";
    splitTip = "";
    displayTip.textContent = "$0.00"
    displayTotal.textContent = "$0.00"
    bill.value = bill.placeholder;
    amountOfPeople.value = amountOfPeople.placeholder;
});

