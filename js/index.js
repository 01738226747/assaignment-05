document.getElementById('Donate-btn').addEventListener('click', function(){
    const newValue = getInputFieldValueById('Donation Amount')
    const NewBdt = getTextFieldValueById('bdt')
    const newBalance = newValue + NewBdt;
    document.getElementById('bdt').innerText = newBalance;
    const muleBalance = getTextFieldValueById('fifty-thousent')
    const curentBalance = muleBalance - newBalance;
    document.getElementById('fifty-thousent').innerText = curentBalance;
    // console.log(newValue)
})