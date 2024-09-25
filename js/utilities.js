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
// function showSectionById(id){
//     // document.getElementById('sub')
// }
function showSectionById(id){
    document.getElementById('sub').classList.add('hidden');
    document.getElementById('History').classList.add('hidden');
    document.getElementById('faq').classList.add('hidden');
    // document.getElementById('Quota').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}