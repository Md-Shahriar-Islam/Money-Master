document.getElementById('btn1').addEventListener('click', function () {
    const expenses = document.getElementById('totalExpenses');
    const remaingBalance = document.getElementById('remain');
    const myIncome = myTotalIncome();
    const mySpend = mySpendingAmount();
    let raminingAmount = 0;
    if (mySpend > myIncome) {
        alert('this is not possible..get a value nice')
    }
    else {
        remainingAmount = myIncome - mySpend;
    }
    expenses.innerText = mySpend;
    remaingBalance.innerText = remainingAmount;

});
function myTotalIncome() {
    const incomeMoney = document.getElementById('income');
    let incomeAmount = 0;
    if (isNaN(parseFloat(incomeMoney.value)) || incomeMoney.value < 0) {
        alert('put a valid income money');
    }
    else {
        incomeAmount = parseFloat(incomeMoney.value);
    }
    return incomeAmount;
}
// my total spending amount calculation
function mySpendingAmount() {
    let foodMoney = document.getElementById('food');
    let clothMoney = document.getElementById('cloth');
    let rentMoney = document.getElementById('rent');
    let foodAmount = 0;
    let clothAmount = 0;
    let rentAmount = 0;
    if (isNaN(parseFloat(foodMoney.value)) || parseFloat(foodMoney.value) < 0) {

        alert('please enter valid amount for food');
    }
    else {
        foodAmount = parseFloat(foodMoney.value);
    }
    if (isNaN(parseFloat(clothMoney.value)) || parseFloat(clothMoney.value) < 0) {
        alert('please enter valid amount for cloth');
    }
    else {
        clothAmount = parseFloat(clothMoney.value);
    }
    if (isNaN(parseFloat(rentMoney.value)) || parseFloat(clothMoney.value) < 0) {
        alert('please enter valid amount for rent');
    }
    else {
        rentAmount = parseFloat(rentMoney.value);
    }
    let totalSpendAmount = 0;
    totalSpendAmount = foodAmount + clothAmount + rentAmount;
    return totalSpendAmount;
};
