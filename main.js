let username = document.querySelector('.input__username');
let password = document.querySelector('.input__password');
let submit = document.querySelector('.submit');
let import_user = document.querySelector('.import__text');
let import_pass = document.querySelector('.import__text_pass');
let delet1 = document.querySelector('.delet');
let edit1 = document.querySelector('.edit');
let delet2 = document.querySelector('.delet_pass');
let edit2 = document.querySelector('.edit_pass');

username.addEventListener('keyup', () => {
    if (username.value.length > 10) {
        username.style.borderBottom = "2px solid red";
    } else
        username.style.borderBottom = '2px solid green';
});

password.addEventListener('keyup', () => {
    if (password.value.length > 10) {
        password.style.borderBottom = "2px solid red";
    } else
        password.style.borderBottom = '2px solid green';

});


submit.addEventListener('click', (e) => {
    if(username.value.length == 0) {
        username.focus()
    } else if (username.value.length > 10) {
        username.focus()
        import_user.textContent = " ";
        import_pass.textContent = " ";

   }
    if(password.value.length == 0) {
        password.focus()
    }
    e.preventDefault();
    import_user.textContent = username.value;
    import_pass.textContent = password.value;
    delet1.style.display = "inline-block";
    edit1.style.display = "inline-block";
    delet2.style.display = "inline-block";
    edit2.style.display = "inline-block";
    submit.style.backgroundColor = "#8a2be2";
    setTimeout(() => {
        submit.style.backgroundColor = "transparent";
    }, 1000);
    
     

    
});

delet1.addEventListener('click', () => {
    import_user.textContent = " ";
});

edit1.addEventListener('click', () => {
    let newEdit1 = prompt("username kiriting:");
    import_user.textContent = newEdit1;
});

delet2.addEventListener('click', () => {
    import_pass.textContent = " ";
});

edit2.addEventListener('click', () => {
    let newEdit2 = prompt("password kiriting:");
    import_pass.textContent = newEdit2;
});









