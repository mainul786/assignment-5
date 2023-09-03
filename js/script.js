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

document.getElementById('calculate').addEventListener('click', function(){
const amount = getAmount('player');
const totalExpense = amount * 5;
setValue('expense', totalExpense);

})