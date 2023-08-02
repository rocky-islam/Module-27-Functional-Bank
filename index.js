// document.getElementById('btn-withdraw').addEventListener('click', () => {
//     let inputWithdrawField = document.getElementById('withdraw-field');
//     let inputValue = parseFloat(inputWithdrawField.value);
//     inputWithdrawField.value = '';
//     // console.log(inputValue);

//     // set withdraw field

//     let withdrawValue = document.getElementById('withdraw-value');
//     let previousWithdrawValue = parseFloat(withdrawValue.innerText);
//     withdrawValue.innerText = inputValue + previousWithdrawValue ;
// })

let getInputValueById = (inputId) =>{
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
};

let getFieldValueById = (fieldId) =>{
    const fieldValueId = document.getElementById(fieldId);
    const fieldValue = parseFloat(fieldValueId.innerText);
    return fieldValue;
};

let setElementValue = (elementId, value) =>{
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}

// for deposit 
document.getElementById('btn-deposit').addEventListener('click', () =>{
    let depositValue = getInputValueById('deposit-field')
    console.log(depositValue);

    let depositField = getFieldValueById('deposit-value');
    console.log(depositField);

    let total = depositField + depositValue;
    setElementValue('deposit-value', total )

    let totalFieldAmount = getFieldValueById('balance')
    let totalAmount = totalFieldAmount + depositValue;
    setElementValue('balance', totalAmount);
});

// for withdraw
document.getElementById('btn-withdraw').addEventListener('click', () =>{
    let withdrawValue = getInputValueById('withdraw-field');
    let withdrawField = getFieldValueById('withdraw-value');
    let totalWithdraw = withdrawField + withdrawValue;
    

    let totalFieldAmount = getFieldValueById('balance');
    let totalAmount = totalFieldAmount - withdrawValue;
    if(totalFieldAmount >= withdrawValue){
        setElementValue('withdraw-value', totalWithdraw);
        setElementValue('balance', totalAmount);
    }
    else{
        alert('insufficient balance')
    }
});