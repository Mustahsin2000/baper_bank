document.getElementById('btn-submit').addEventListener('click',function(){
    //get email
    const email = document.getElementById('mail');
    const em = email.value;
    //get password
    const pass =document.getElementById('pass');
    const password = pass.value;
    console.log(em,password);

    //verify user email and password
    if(em=='mustahsin.rafi@gmail.com'&& password=='rafi12345'){
        window.location.href="bank.html";
    }else{
        alert('vhul shob e vhul');
    }
})

