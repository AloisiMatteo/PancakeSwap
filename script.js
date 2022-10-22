//Inizializzazione delle variabili
let bottonePhishing = document.querySelector(".phishing-second-container");
let phishingGenerale = document.querySelector(".phishing-warning-general");
let offuscaSchermo = document.querySelector(".offusca-schermo");
let elementiNavAdattata = document.querySelectorAll("#elemento-nav-adattata");
let listaUpscroll = document.querySelectorAll("#upscroll-list");
let navbarSetting = document.querySelector("#nav-svg-setting");
let contenitoreGeneraleSetting = document.querySelector(".opzioni-normale-generale");
let navBarLogoChiaro = document.querySelector(".svg-tema-chiaro");
let navBarLogoScuro = document.querySelector(".svg-tema-scuro");

let contenitoreTimer = document.querySelectorAll("#timer-giorni");

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
var settingAdattatoOn = window.matchMedia("(max-width: 850px)");
var navBarChangeOn = window.matchMedia("(max-width: 970px)");

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
            contenitore.setAttribute("style" , "background-color: var(--healt-off-bg)");
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
        document.body.setAttribute("style" , "overflow-y: scroll");
        offuscaSchermo.classList.remove("offusca-schermo-on");
        contenitoreGeneraleSetting.classList.remove("opzioni-generale-on");

        if (settingAdattatoOn.matches) {
            contenitoreGeneraleSetting.classList.remove("opzioni-adattato-top70");
            contenitoreGeneraleSetting.classList.add("opzioni-adattato-top100");
        }
    });
}
function settingClose () {
    document.body.setAttribute("style" , "overflow-y: scroll");
    contenitoreGeneraleSetting.classList.remove("opzioni-generale-on");
    offuscaSchermo.classList.remove("offusca-schermo-on");

    if (settingAdattatoOn.matches) {
        contenitoreGeneraleSetting.classList.add("opzioni-adattato-top70");
        contenitoreGeneraleSetting.classList.remove("opzioni-adattato-top100");
    }
}
function cambiaTema() {

    const temaAttuale = document.documentElement;
    if (temaAttuale.getAttribute("data-theme") == "dark") {
        navBarLogoChiaro.classList.add("mostra-svg-navbar");
        navBarLogoChiaro.classList.remove("nascondi-svg-navbar");
        navBarLogoScuro.classList.add("nascondi-svg-navbar");
        navBarLogoScuro.classList.remove("mostra-svg-navbar");
        } else {
        navBarLogoChiaro.classList.add("nascondi-svg-navbar");
        navBarLogoChiaro.classList.remove("mostra-svg-navbar");
        navBarLogoScuro.classList.add("mostra-svg-navbar");
        navBarLogoScuro.classList.remove("nascondi-svg-navbar");
        }

    if (navBarChangeOn.matches) {
        navBarLogoChiaro.classList.add("nascondi-svg-navbar");
        navBarLogoScuro.classList.add("nascondi-svg-navbar");
    }

    temaAttuale.getAttribute("data-theme") == "light" ?
    temaAttuale.setAttribute("data-theme" , "dark") :
    temaAttuale.setAttribute("data-theme" , "light");
    localStorage.setItem("ThemeRunningNow" , temaAttuale.getAttribute("data-theme"));

}
function show(){
   let  checkBannerPhish = localStorage.getItem('visualizzaBanner')
    if (checkBannerPhish === 'false'){
        phishingGenerale.setAttribute('style', 'display: none')
    }

}
function salvaTemaFlag () {
    const controllo = localStorage.getItem("ThemeRunningNow");
    if (controllo == "light") {
        document.documentElement.setAttribute("data-theme" , "light");
        temaFlag.setAttribute("style" , "left: 0px");
        bordoFlagTema.setAttribute("style" , "left: 0px");
        svgTemaChiaro.setAttribute("style" , "display: block");
        svgTemaScuro.setAttribute("style" , "display: none");
        temaCheck = false;
        navBarLogoChiaro.classList.add("mostra-svg-navbar");
        navBarLogoChiaro.classList.remove("nascondi-svg-navbar");
        navBarLogoScuro.classList.add("nascondi-svg-navbar");
        navBarLogoScuro.classList.remove("mostra-svg-navbar");

    } else {
        document.documentElement.setAttribute("data-theme" , "dark");
        temaFlag.setAttribute("style" , "right: 0px");
        bordoFlagTema.setAttribute("style" , "right: 0px");
        svgTemaChiaro.setAttribute("style" , "display: none");
        svgTemaScuro.setAttribute("style" , "display: block");
        temaCheck = true;
        navBarLogoChiaro.classList.add("nascondi-svg-navbar");
        navBarLogoChiaro.classList.remove("mostra-svg-navbar");
        navBarLogoScuro.classList.add("mostra-svg-navbar");
        navBarLogoScuro.classList.remove("nascondi-svg-navbar");
    }

    if (navBarChangeOn.matches) {
        navBarLogoChiaro.classList.add("nascondi-svg-navbar");
        navBarLogoScuro.classList.add("nascondi-svg-navbar");
    }

}
function calcolaTimer () {
    let oggi = new Date();
    let dataStabilita = new Date("10/28/22");
    let giorniRimanenti = Math.floor((dataStabilita - oggi) / (1000*60*60*24));
    let oreRimanenti = (dataStabilita.getHours() + 24) - oggi.getHours();
    let minutiRimanenti = (dataStabilita.getMinutes() + 60) - oggi.getMinutes();
    let secondiRimanenti = (dataStabilita.getSeconds() + 60) - oggi.getSeconds();
    if (minutiRimanenti > 0) oreRimanenti--;
    console.log(giorniRimanenti + ": " + oreRimanenti + ": " + minutiRimanenti + ": " + secondiRimanenti);

    contenitoreTimer[0].textContent = giorniRimanenti;
    contenitoreTimer[1].textContent = oreRimanenti;
    contenitoreTimer[2].textContent = minutiRimanenti;
    contenitoreTimer[3].textContent = secondiRimanenti;
}
//Inizializzazione degli eventi
bottonePhishing.addEventListener("click", () => {
    let visualizzaPhishing = false 
    localStorage.setItem('visualizzaBanner', JSON.stringify(visualizzaPhishing))
    show()
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

    document.body.setAttribute("style" , "overflow-y: hidden");

    if (settingAdattatoOn.matches) {
        contenitoreGeneraleSetting.classList.add("opzioni-adattato-top70");
        contenitoreGeneraleSetting.classList.remove("opzioni-adattato-top100");
    } else {
        contenitoreGeneraleSetting.classList.remove("opzioni-adattato-top100");
        contenitoreGeneraleSetting.classList.remove("opzioni-adattato-top70");
    }

    contenitoreGeneraleSetting.classList.add("opzioni-generale-on");
    settingPriority();

    if (settingAdattatoOn.matches) {
        contenitoreGeneraleSetting.classList.remove("opzioni-adattato-top100");
        contenitoreGeneraleSetting.classList.add("opzioni-adattato-top70");
    }

});


//Avvio programma
calcolaTimer(); //manda nella pagina il timer in modo immediato
navPriority();
spostaFlagSetting(contenitoreBottoneHealt, healtCheck, healtFlag, bordoFlagHealt);
show();
salvaTemaFlag();
setInterval(function () { //mada nella pagina il timer ogni secondo
    let oggi = new Date();
    let dataStabilita = new Date("10/28/22");
    let giorniRimanenti = Math.floor((dataStabilita - oggi) / (1000*60*60*24));
    let oreRimanenti = (dataStabilita.getHours() + 24) - oggi.getHours();
    let minutiRimanenti = (dataStabilita.getMinutes() + 60) - oggi.getMinutes();
    let secondiRimanenti = (dataStabilita.getSeconds() + 60) - oggi.getSeconds();
    if (minutiRimanenti > 0) oreRimanenti--;
    console.log(giorniRimanenti + ": " + oreRimanenti + ": " + minutiRimanenti + ": " + secondiRimanenti);

    contenitoreTimer[0].textContent = giorniRimanenti;
    contenitoreTimer[1].textContent = oreRimanenti;
    contenitoreTimer[2].textContent = minutiRimanenti;
    contenitoreTimer[3].textContent = secondiRimanenti;
}, 1000);