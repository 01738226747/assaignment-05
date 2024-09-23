function getInputFieldValueById(id){
    const inputvalue = document.getElementById(id).value;
    const inputvalueN = parseFloat(inputvalue)
    return inputvalueN;
}

function getTextFieldValueById(id){
    const bdt = document.getElementById(id).innerText
    const bdtN = parseFloat(bdt);
    return bdtN;
}