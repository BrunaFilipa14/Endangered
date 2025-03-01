function scrollTop() {
    //Criar botao HTML
    const scrollBtn = document.createElement("button"); // cria um botao
    scrollBtn.innerHTML = "&uarr;"; // cria uma seta
    scrollBtn.setAttribute("id", "scroll-btn"); //dá um ID ao botao
    document.body.appendChild(scrollBtn);

    // Mostrar / Esconder o botão 
    function scrollBtnDisplay() {
    window.scrollY > window.innerHeight //se o valor de Y da página for maior que a altura do dispositivo
        ? scrollBtn.classList.add("show") //se for verdadeiro, o botao aparece
        : scrollBtn.classList.remove("show"); //se for falso, o botao não aparece
    };
    window.addEventListener("scroll", scrollBtnDisplay); //quando o user fizer scroll, chama a função

    // fazer scroll up quando clicado
    function scrollWindow() {
        if (window.scrollY != 0) {
            setTimeout(function () { // utilizado setTimeout porque o safari não é compatível com "scroll-behavior:smooth;" de CSS
                window.scrollTo(0, window.scrollY - 100); //sobe a pagina 50 pixeis por cada 10 milisegundos
                scrollWindow();
            }, 10);
        }
    };
    scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();