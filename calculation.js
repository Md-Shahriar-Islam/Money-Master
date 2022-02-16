//calculate button working
document.getElementById('btn1').addEventListener('click', function () {
    const expenses = document.getElementById('totalExpenses');
    const remaingBalance = document.getElementById('remain');
    const balanceRemain = myRemaingBalance();
    const mySpend = mySpendingAmount();
    expenses.innerText = mySpend;
    remaingBalance.innerText = balanceRemain;

});
//savings button working
document.getElementById('btn2').addEventListener('click', function () {
    let savedAmount = document.getElementById('saved');
    let remaining = document.getElementById('leftAmount');
    let totalExpenses = document.getElementById('totalExpenses');
    let savedMoney = mySavings();
    let moneyLeft = parseFloat(document.getElementById('remain').innerText);
    let moneyNow = 0
    if (parseFloat(totalExpenses.innerText) == 0) {
        moneyNow = myTotalIncome() - savedMoney;
    }
    else if (savedMoney > moneyLeft) {
        alert('you can not save money if you do nont have enough money');

    }
    else {
        moneyNow = moneyLeft - savedMoney;

    }
    savedAmount.innerText = savedMoney;
    remaining.innerText = moneyNow;
});

// my total income
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
// remaining balance after spending money
function myRemaingBalance() {
    const myIncome = myTotalIncome();
    const mySpend = mySpendingAmount();
    let raminingAmount = 0;
    if (mySpend > myIncome) {
        alert('this is not possible..get a value nice')
    }
    else {
        remainingAmount = myIncome - mySpend;
    }
    return remainingAmount;

}
// saved money
function mySavings() {
    let savingPercentage = document.getElementById('percentage');
    let savingPercentageMoney = 1;
    let TotalIncome = 0;
    let totalSavedMoney = 1;
    if (isNaN(parseFloat(savingPercentage.value)) || parseFloat(savingPercentage.value) < 0) {
        alert('Not a correct value');
    }
    else {
        savingPercentageMoney = parseFloat(savingPercentage.value) / 100;

    }
    TotalIncome = myTotalIncome();
    totalSavedMoney = TotalIncome * savingPercentageMoney;
    return totalSavedMoney;


}