//Inizializzazione delle variabili
let bottonePhishing = document.querySelector(".phishing-second-container");
let phishingGenerale = document.querySelector(".phishing-warning-general");
let offuscaSchermo = document.querySelector(".offusca-schermo");
let elementiNavAdattata = document.querySelectorAll("#elemento-nav-adattata");
let listaUpscroll = document.querySelectorAll("#upscroll-list");
let navbarSetting = document.querySelector("#nav-svg-setting");
let contenitoreGeneraleSetting = document.querySelector(".opzioni-normale-generale");

//Variabili per il flag healt del reparto opzioni
let contenitoreBottoneHealt = document.querySelector(".healt-indicator-destra");
let healtFlag = document.querySelector(".healt-indicator-flag");
let bordoFlagHealt = document.querySelector("#bordo-healt-indicator");
let healtCheck = true;

//Variabili per il flag cambio tema del reparto opzioni
let contenitoreBottoneTema = document.querySelector(".cambio-tema-destra");
let temaFlag = document.querySelector(".cambio-tema-flag");
let bordoFlagTema = document.querySelector("#bordo-tema-indicator");
let temaCheck = true;
let svgTemaChiaro = document.querySelector("#tema-chiaro");
let svgTemaScuro = document.querySelector("#tema-scuro");


//Variabili per la registrazione della grandezza dello schermo
var settingAdattatoOn = window.matchMedia("(max-width: 850px)")

//Inizializzazione delle funzioni

function navPriority () {       //Funziona pensata per dare "priorità" alla navbar (il resto dello schermo verrà offuscato)
    
elementiNavAdattata.forEach(element => {
    element.addEventListener("mouseover", () => {   //Aggiunge l'evento per ogni elemento presente nella navbar in basso (adattata)
        if (element == elementiNavAdattata[0]) { }      //Se ricade sul contenitore trade non fa nulla
        else {offuscaSchermo.classList.add("offusca-schermo-on"); }
    });
});
elementiNavAdattata.forEach(element => {
    element.addEventListener("mouseout", () => {
        offuscaSchermo.classList.remove("offusca-schermo-on");
    });
});
}
function spostaFlagSetting (contenitore, check, flag, bordoFlag) {
    contenitore.addEventListener("click" , () => {
        if (check) {
            flag.setAttribute("style" , "left: 4px");
            bordoFlag.setAttribute("style" , "left: 1px");
            contenitore.setAttribute("style" , "background-color: var(--theme-change-scroll)");
            check = false;
        } else {
            flag.setAttribute("style" , "right: 4px");
            bordoFlag.setAttribute("style" , "right: 0px");
            contenitore.setAttribute("style" , "background-color: var(--healt-indicator-scroll)");
            check = true;
        }
    });
}
function settingPriority () {
    offuscaSchermo.classList.add("offusca-schermo-on");
    offuscaSchermo.addEventListener("click" , () => {
        offuscaSchermo.classList.remove("offusca-schermo-on");
        contenitoreGeneraleSetting.classList.remove("opzioni-generale-on");

        if (settingAdattatoOn.matches) {
            contenitoreGeneraleSetting.setAttribute("style" , "top: 100%");
        }
    });
}
function settingClose () {
    contenitoreGeneraleSetting.classList.remove("opzioni-generale-on");
    offuscaSchermo.classList.remove("offusca-schermo-on");

    if (settingAdattatoOn.matches) {
        contenitoreGeneraleSetting.setAttribute("style" , "top: 100%");
    }
}

//Inizializzazione degli eventi
bottonePhishing.addEventListener("click", () => {
    phishingGenerale.setAttribute("style", "visibility: hidden");
});

contenitoreBottoneTema.addEventListener("click" , () => {       //Sposta il flag al click del contenitore
    if (temaCheck) {
        temaFlag.setAttribute("style" , "left: 0px");
        bordoFlagTema.setAttribute("style" , "left: 0px");
        svgTemaChiaro.setAttribute("style" , "display: block");
        svgTemaScuro.setAttribute("style" , "display: none");
        temaCheck = false;
    } else {
        temaFlag.setAttribute("style" , "right: 0px");
        bordoFlagTema.setAttribute("style" , "right: 0px");
        svgTemaChiaro.setAttribute("style" , "display: none");
        svgTemaScuro.setAttribute("style" , "display: block");
        temaCheck = true;
    }
});

navbarSetting.addEventListener("click" , () => {    //Mostra contenitore setting al click dell'svg

    if (settingAdattatoOn.matches) {
        contenitoreGeneraleSetting.setAttribute("style" , "top: 100%");
    } else {
        contenitoreGeneraleSetting.setAttribute("style" , "top: 35%");
    }

    contenitoreGeneraleSetting.classList.add("opzioni-generale-on");
    settingPriority();

    if (settingAdattatoOn.matches) {
        contenitoreGeneraleSetting.setAttribute("style" , "top: 70%");
    }

});


//Avvio programma
navPriority();
spostaFlagSetting(contenitoreBottoneHealt, healtCheck, healtFlag, bordoFlagHealt);
