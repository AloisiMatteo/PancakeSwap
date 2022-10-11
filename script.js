//Inizializzazione delle variabili
let bottonePhishing = document.querySelector(".phishing-second-container");
let phishingGenerale = document.querySelector(".phishing-warning-general");

//Inizializzazione delle funzioni

//Inizializzazione degli eventi
bottonePhishing.addEventListener("click", () => {
    phishingGenerale.setAttribute("style", "display:none");

});