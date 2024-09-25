document.getElementById('Donate-btnQ').addEventListener('click', function(){
    const newValueQ = getInputFieldValueById('qDonation Amount')
    if (isNaN(newValueQ)) {
        alert('not amount')
        return
    }
    else if (newValueQ > 5500) {
        alert('this amount big')
        return
    }
    else if (newValueQ < 0) {
        alert('this amount low')
        return
    }
    
    const NewBdtQ = getTextFieldValueById('bdtQ')
    const newBalanceQ = newValueQ + NewBdtQ;
     if (newBalanceQ < 0) {
        alert('this amount low')
        return
    }
    document.getElementById('bdtQ').innerText = newBalanceQ;
    const muleBalanceQ = getTextFieldValueById('fifty-thousent')
    const curentBalanceQ = muleBalanceQ - newValueQ;
    document.getElementById('fifty-thousent').innerText = curentBalanceQ;
    const div = document.createElement('div');
    div.classList.add('bg-gray-100');
    div.innerHTML = `<p text-xl font-semibold>${newValueQ} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>`;
    const d = new Date();
    document.getElementById('History').innerHTML = d; 
    document.getElementById('History').appendChild(div);
 
  
    // console.log(p)
})