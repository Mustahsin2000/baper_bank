document.getElementById('deposit_btn').addEventListener('click',function(){
    //input er value ta nibo
    const deposit_input = document.getElementById('depo_input');
    const depo_value = deposit_input.value ;
    console.log(depo_value);
    //deposit er ager value er shathe jog korbo
    const deposit_amount = document.getElementById('deposit-total');
    deposit_amount.innerText = parseFloat(deposit_amount.innerText)  + parseFloat(depo_value);
    deposit_input.value = '';

    //input taka in balance
    const balance_input = document.getElementById('balance');
    balance_input.innerText = parseFloat(balance_input.innerText) + parseFloat(depo_value);

})