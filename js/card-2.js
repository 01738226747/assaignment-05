document.getElementById('Dnate-btn').addEventListener('click', function(){
    const newValueFf = getInputFieldValueById('Dnation Amount')
    if (isNaN(newValueFf)) {
        alert('not amount')
        return
    }
    else if (newValueFf > 5500) {
        alert('this amount big')
        return
    }
    else if (newValueFf < 0) {
        alert('this amount low')
        return
    }
    
    const NewBdtF = getTextFieldValueById('bdtf')
    const newBalanceF = newValueFf + NewBdtF;
    if (newBalanceF < 0) {
        alert('this amount low')
        return
    }
    document.getElementById('bdtf').innerText = newBalanceF;
    const muleBalanceF = getTextFieldValueById('fifty-thousent')
    const curentBalanceF = muleBalanceF - newValueFf;
    document.getElementById('fifty-thousent').innerText = curentBalanceF;
    const div = document.createElement('div');
    div.classList.add('bg-gray-100');
    div.innerHTML = `<p text-xl font-semibold>${newValueFf} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>`;
    const d = new Date();
    document.getElementById('History').innerHTML = d; 
    document.getElementById('History').appendChild(div);
 
  
    // console.log(p)
})