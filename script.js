const password= document.getElementById('content5');
const confirm_password = document.getElementById('content6');
const submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    if(password.value !== confirm_password.value){
        confirm_password.value='';
        password.value='';
        password.setAttribute('style', 'outline:solid rgba(255, 0, 0, 0.514);');
        confirm_password.setAttribute('style', 'outline:solid rgba(255, 0, 0, 0.514);');
    }   
})