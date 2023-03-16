const bill = document.querySelector(".bill-form");
const tipPercentageButton = document.querySelectorAll(".btn");
const tipPercentageCustom = document.querySelector(".custombtn");
const amountOfPeople = document.querySelector(".people-form");
const displayTip = document.querySelector(".tip");
const displayTotal = document.querySelector(".total");
const resetButton = document.querySelector(".resetbtn");
const hiddenMessage = document.querySelector(".hidden");

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
    hiddenMessage.style.display = "none";
    amountOfPeople.style.border = "none";
});


amountOfPeople.addEventListener("input", () => {
    if(+amountOfPeople.value === 0){
        hiddenMessage.style.display = "block";
    } else {
        hiddenMessage.style.display = "none";
    }
});

amountOfPeople.addEventListener("input", () => {
    if(+amountOfPeople.value === 0 || +amountOfPeople.placeholder === 0){
        amountOfPeople.style.border = "2px solid red";
    } else {
        amountOfPeople.style.border = "2px solid hsl(172, 67%, 45%)";
    }
});
