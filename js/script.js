function getAmount(inputId){
    const getField = document.getElementById(inputId);
    const getFieldValue = getField.value;
    const getFieldString = parseFloat(getFieldValue);
    return getFieldString;
}

document.getElementById('calculate').addEventListener('click', function(){
const amount = getAmount('player');

})