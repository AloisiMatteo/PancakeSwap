//Inizializzazione delle variabili
let bottonePhishing = document.querySelector(".phishing-second-container");
let phishingGenerale = document.querySelector(".phishing-warning-general");
let offuscaSchermo = document.querySelector(".offusca-schermo");
let elementiNavAdattata = document.querySelectorAll("#elemento-nav-adattata");


//Inizializzazione delle funzioni

function navPriority () {       //Funziona pensata per dare "priorità" alla navbar (il resto dello schermo verrà offuscato)
    
elementiNavAdattata.forEach(element => {
    element.addEventListener("mouseover", () => {   //Aggiunge l'evento per ogni elemento presente nella navbar in basso (adattata)
        if (element == elementiNavAdattata[0]) { }      //Se ricade sul contenitore trade non fa nulla
        else {offuscaSchermo.classList.add("offusca-schermo-on");
            offuscaSchermo.classList.remove("offusca-schermo-off");}
    });
});
elementiNavAdattata.forEach(element => {
    element.addEventListener("mouseout", () => {
        offuscaSchermo.classList.add("offusca-schermo-off");
        offuscaSchermo.classList.remove("offusca-schermo-on");
    });
});
}

//Inizializzazione degli eventi
bottonePhishing.addEventListener("click", () => {
    phishingGenerale.setAttribute("style", "display:none");
});

//Avvio programma
navPriority();