function getTheInputFieldValue(id){
    const inputFeild = document.getElementById(id);
    const inputValueNumber = parseFloat(inputFeild.value);
    inputFeild.value = '';
    return inputValueNumber;
}


function getDipositAndWihtrawTxt(id){
    const getTheTextEliments = document.getElementById(id);
    const getTextNumber = parseFloat(getTheTextEliments.innerText);
    return getTextNumber;
}


function setDipositAndWithRawValue(total,id){ 
    document.getElementById(id).innerText = total
}

function mainResultCal(type,totalValue,getInputValue){
    if(type === true){
        const getTotalTrue = totalValue + getInputValue;
        return getTotalTrue;
    }else if(type === false){
        const getTotalTrue = totalValue - getInputValue;
        return getTotalTrue;
    }
}

