    // ======  login area =======
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click',function(e){
    e.preventDefault();
    const loginArea = document.getElementById('login-area');
    const tnxArea = document.getElementById('tnx-area');
    loginArea.style.display='none';
    tnxArea.style.display='block';
})

// ======  Deposit area =======
let diposit_btn = document.getElementById('diposit-btn');
diposit_btn.addEventListener('click',function(){
    if(document.getElementById('diposit-inp').value > 0 ){
        let diposit_inp = document.getElementById('diposit-inp');
        let diposit_inp_num = parseFloat(diposit_inp.value);
        let diposit_amount = document.getElementById('diposit-amount');
        diposit_amount.innerText = diposit_inp_num;
        let balance_amount = document.getElementById('balance-amount');
        let balance_amount_num = parseFloat(balance_amount.innerText);
        balance_amount.innerText = diposit_inp_num + balance_amount_num;
        diposit_inp.value = '';
        let Deposit_alert = document.getElementById('custom-alert-deposit')
        Deposit_alert.style.display='none';
    }else{
        let Deposit_alert = document.getElementById('custom-alert-deposit')
        Deposit_alert.style.display='block';
        Deposit_alert.innerText = 'Please input a valid Amount';
    }

})

// ======  Withdraw area =======
let WithdrawBtn = document.getElementById('Withdraw-btn');

WithdrawBtn.addEventListener('click',function(){
    if(document.getElementById('balance-amount').innerText >= document.getElementById('Withdraw-inp').value && document.getElementById('Withdraw-inp').value > 0 ){
        let Withdraw_inp = document.getElementById('Withdraw-inp');
        let Withdraw_inp_num = parseFloat(Withdraw_inp.value);
        let Withdraw_amount = document.getElementById('Withdraw-amount');
        let Withdraw_amount_num = parseFloat(Withdraw_amount.innerText);
        Withdraw_amount.innerText = Withdraw_inp_num
        let balance_amount = document.getElementById('balance-amount');
        let balance_amount_num = parseFloat(balance_amount.innerText);
        balance_amount.innerText = balance_amount_num - Withdraw_inp_num;
        let Withdraw_alert = document.getElementById('custom-alert-withdraw')
        Withdraw_alert.style.display='none';
        Withdraw_inp.value = '';
    }else{
        let Withdraw_alert = document.getElementById('custom-alert-withdraw')
        Withdraw_alert.style.display='block';
        Withdraw_alert.innerText = 'Please input a valid ammount';
    }
})