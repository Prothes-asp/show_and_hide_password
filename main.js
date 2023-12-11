function myFunc(){
    var key = document.getElementById('checkBox');
    var showPass = document.getElementById('password');
    
    if(key.checked == true){
        showPass.type = 'text';
    }
    else{
        showPass.type = 'password';
    }
}