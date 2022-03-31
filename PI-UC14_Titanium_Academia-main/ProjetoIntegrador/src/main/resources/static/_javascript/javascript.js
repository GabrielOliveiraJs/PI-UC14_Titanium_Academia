function abrir_link_f() {
    window.open('https://www.facebook.com/titaniumletprudente/', '_blank');
};

function abrir_link_i() {
    window.open('https://www.instagram.com/academiatitaniumlet/', '_blank');
};

function abrir_whatsapp() {
    window.open('https://wa.me/5599999999999', '_blank');
}

 //Função de segurança (posteriormente a ser substituido por Spring Security)
 function login() {
    let email = document.querySelector('#email');
    let senha = document.querySelector('#password');

    if (email.value === 'admin@admin.com.br' && senha.value === 'admin') {
        window.location.replace("/cadastrarUsuario");
    } else {
        alert("Email e/ou senha inválidos");
        email.value = "";
        senha.value = "";
    }
}

