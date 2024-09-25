document.getElementById('Donate-btn').addEventListener('click', function(){
    const newValue = getInputFieldValueById('Donation Amount')
    if (isNaN(newValue)) {
        alert('not amount')
        return
    }
    else if (newValue > 5500) {
        alert('this amount big')
        return
    }
    else if (newValue < 0) {
        alert('this amount low')
        return
    }
    
    const NewBdt = getTextFieldValueById('bdt')
    const newBalance = newValue + NewBdt;
    if (newBalance < 0) {
        alert('this amount low')
        return
    }
    document.getElementById('bdt').innerText = newBalance;
    const muleBalance = getTextFieldValueById('fifty-thousent')
    const curentBalance = muleBalance - newValue;
    document.getElementById('fifty-thousent').innerText = curentBalance;
    const div = document.createElement('div');
    div.classList.add('bg-gray-100');
    div.innerHTML = `<p text-xl font-semibold>${newValue} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>`;
    const d = new Date();
    document.getElementById('History').innerHTML = d; 
    document.getElementById('History').appendChild(div);
 
  
    // console.log(p)
})


// document.getElementById('Dnate-btn').addEventListener('click', function(){
//     const nwValue = getInputFieldValueById('Dnation Amount')
//     const NwBdt = getTextFieldValueById('bdt')
//     const nwBalance = nwValue + NwBdt;
//     document.getElementById('bdt').innerText = nwBalance;
//     const mleBalance = getTextFieldValueById('ffty-thousent')
//     const crentBalance = mleBalance - nwBalance;
//     document.getElementById('fifty-thousent').innerText = crentBalance;
//     // console.log(newValue)
// })