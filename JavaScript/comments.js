const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;

function validateComment (){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    if(!email.match(emailRegex)){
        alert("Endereço de Email Inválido!");
        return;
    }
    if(nome == null || nome == ""){
        alert("Nome inválido!");
        return;
    }
    if(comment == null || comment == ""){
        alert("Comentário inválido!");
        return;
    }
    saveComment(nome,comment);
}

function saveComment(nome,comment){
    localStorage.setItem('nome',nome);
    localStorage.setItem('comment',comment);
    location.reload()
    postComment();
}

function postComment(){

    var commentPosition = document.getElementsByClassName('comment-list');

    var newPost = document.createElement('div');


    var profileSection = document.createElement('div');

    var profileName = document.createElement('h3');
    profileName.innerHTML = localStorage.getItem('nome');
    var profilePic = document.createElement(img);
    profilePic.src = 'imagens/icons/anonymous.png';

    
    var commentSection = document.createElement('div');

    var comment = document.createElement('p');
    comment.innerHTML = localStorage.getItem('comment');


    profileSection.appendChild(profileName);
    profileSection.appendChild(profilePic);

    commentSection.appendChild(comment);

    newPost.appendChild(profileSection);
    newPost.appendChild(commentSection);

    commentPosition.innerHTML(newPost);

}