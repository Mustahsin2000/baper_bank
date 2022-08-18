document.getElementById('withdraw_btn').addEventListener('click',function(){
    const withdraw_input = document.getElementById('with_inpu');
    const withdraw_value =  withdraw_input.value ;
    console.log(withdraw_value);
    withdraw_input.value = '';

    const with_balance = document.getElementById('withdraw_total');
    with_balance.innerText = parseFloat(with_balance.innerText)+parseFloat(withdraw_value);

    const balance_input = document.getElementById('balance');
    balance_input.innerText = parseFloat(balance_input.innerText)-parseFloat(withdraw_value);
})