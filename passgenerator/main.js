let pass_length = document.getElementById("cantidad");
let btn = document.getElementById("generar");
let pass_print = document.getElementById("contrasena");

const char_password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generatePassword()
{
    let number = parseInt(pass_length.value);
    let password = '';

    if(number < 8)
    {
        alert("Lenght min: 8");  
    }  
    for(let i = 0; i < number; i++)
    {
        let rand_char = char_password[Math.floor(Math.random() * char_password.length)];
        password += rand_char;
    }
    
    pass_print.value = password;
}







