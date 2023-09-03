function getAmount(inputId){
    const getField = document.getElementById(inputId);
    const getFieldValue = getField.value;
    const getFieldString = parseFloat(getFieldValue);
    return getFieldString;
}

function setValue(setId, value){
const getElement = document.getElementById(setId);
getElement.innerText = value;
}

function getInnerValueById(innerId){
    const element = document.getElementById(innerId);
    const elementValue = element.innerText;
    const elementValueString = parseFloat(elementValue);
    return elementValueString;
}

document.getElementById('calculate').addEventListener('click', function(){
const amount = getAmount('player');
const totalExpense = amount * 5;
setValue('expense', totalExpense);

})

document.getElementById('calculate-total').addEventListener('click', function(){
    const managerAmount = getAmount('manager');
    const coachAmount = getAmount('coach');
    const totalExpenseAmont = getInnerValueById('expense');
    const total = managerAmount + coachAmount + totalExpenseAmont;
    setValue('total', total);
})