const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
//utilização de regular expressions para validação do email
//[combinação de caracteres de a-z ou 0-9]@[combinação de caracteres de a-z ou 0-9].[combinação de caracteres de a-z com 2 a 4 caracteres]
function validateSupport(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var message = document.getElementById("message").value;

    if(!email.match(emailRegex)){
        alert("Endereço de Email Inválido!");
        return false;
    }
    if(nome == null || nome == ""){
        alert("Nome inválido!");
        return false;   
    }
    if(assunto == null || assunto == ""){
        alert("Tópico inválido!");
        return false;
    }
    if(message == null || message == ""){
        alert("Mensagem Inválida!");
        return false;
    }
    return true;
}