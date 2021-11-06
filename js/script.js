const tlac1 = document.getElementById("tlac1");
const tlac2 = document.getElementById("tlac2");
const tlac3 = document.getElementById("tlac3");
const tlac4 = document.getElementById("tlac4");
const tlac5 = document.getElementById("tlac5");
const tlac6 = document.getElementById("tlac6");
const tlac7 = document.getElementById("tlac7");
const tlac8 = document.getElementById("tlac8");
const tlac9 = document.getElementById("tlac9");
const tlac0 = document.getElementById("tlac0");
const tlacTecka = document.getElementById("tecka");
const tlacRovna = document.getElementById("tlacRovna");
const tlacPlus = document.getElementById("tlacPlus");
const tlacClear = document.getElementById("tlacClear");
const tlacSmaz = document.getElementById("tlacSmaz");
const skin = document.getElementById("skins");

const displayDole = document.querySelector(".displayDole");
const displayNahore = document.querySelector(".displayNahore");
const boomGif = document.querySelector(".cover");

let prvniHodnota;   // zde ukládám čísla pro výpočet
let druhaHodnota;
let operator;       // zde ukládám operator matematické funkce
let novyOperator;   // zde ukládám další operátor pro počítání
                    // v řadě bez stisknutí "Rovná se"
let delka;          // pozice pro znak znaménka ve stringu displayNahore.textcontent 

// eventy pro tlačítka čísel
tlacClear.addEventListener("click", () => {
    displayNahore.textContent = "";
    displayDole.textContent = "";
    prvniHodnota = 0;
    druhaHodnota = 0;
});

tlac1.addEventListener("click", () => {displayDole.textContent += tlac1.value});
tlac2.addEventListener("click", () => {displayDole.textContent += tlac2.value});
tlac3.addEventListener("click", () => {displayDole.textContent += tlac3.value});
tlac4.addEventListener("click", () => {displayDole.textContent += tlac4.value});
tlac5.addEventListener("click", () => {displayDole.textContent += tlac5.value});
tlac6.addEventListener("click", () => {displayDole.textContent += tlac6.value});
tlac7.addEventListener("click", () => {displayDole.textContent += tlac7.value});
tlac8.addEventListener("click", () => {displayDole.textContent += tlac8.value});
tlac9.addEventListener("click", () => {displayDole.textContent += tlac9.value});
tlac0.addEventListener("click", () => {displayDole.textContent += tlac0.value});

// tlačítko smazat poslední znak
// hlídám jestli není dole prázdno a nenechám mazat z výsledku
tlacSmaz.addEventListener("click", () => {
    zjistiHorniZnamenko();
    if (displayNahore.textContent === ""
        || displayNahore.textContent[delka] === "+"
        || displayNahore.textContent[delka] === "-" 
        || displayNahore.textContent[delka] === "*" 
        || displayNahore.textContent[delka] === "/") {
            displayDole.textContent = displayDole.textContent.slice(0, -1);
    }
    
});

// tlačítko tečka - hlídám pouze jedno použití v jednom čísle
tlacTecka.addEventListener("click", () => {
    if (displayDole.textContent.includes(".")) {
    } else {
        displayDole.textContent += "."}
    });

// u tlačítka "rovná se" hlídám vícero zmáčknutí 
tlacRovna.addEventListener("click", () => {
    zjistiHorniZnamenko();
     if (  
        displayDole.textContent != "" && (
        displayNahore.textContent[delka] === "+"
        || displayNahore.textContent[delka] === "-" 
        || displayNahore.textContent[delka] === "*" 
        || displayNahore.textContent[delka] === "/"))  {
            pocitej();
        } 
});

tlacPlus.addEventListener("click", () => {overZadani("+")});
tlacKrat.addEventListener("click", () => {overZadani("*")});
tlacDeleno.addEventListener("click", () => {overZadani("/")});

// u tlačítka mínus kontroluji zadání prvního čísla záporného
tlacMinus.addEventListener("click", () => {
    if (displayNahore.textContent == "" && displayDole.textContent == "") {
        displayDole.textContent = "-";
    } else {
    overZadani("-");
    }   
});

// funkce pro zpracování
function zjistiHorniZnamenko () {
    return delka = displayNahore.textContent.length - 2;
}

function overZadani (znamenko) {
    let stavOperace;
    zjistiHorniZnamenko();
    operator = znamenko;
    novyOperator = operator;    //ukládám hodnotu než se přepíše,
                                // abych ji použil na horní zápis
                                // v případě jiného znaménka v řadě výpočtů
    
    if (displayNahore.textContent == "") {
        zpracujPrvniCislo(displayDole.textContent);
    } else if (displayNahore.textContent[delka] === znamenko) {
             stavOperace = "stejneZnamenko";
    } else if ( displayNahore.textContent[delka] === "+" ||
                displayNahore.textContent[delka] === "-" ||
                displayNahore.textContent[delka] === "*" ||
                displayNahore.textContent[delka] === "/"      
            ) {
            stavOperace = "jineZnamenko";
    } else {
            stavOperace = "nahoreJeVyraz";
    };      
    switch (stavOperace) {
        case "stejneZnamenko": 
            if (displayDole.textContent != "") {
                operator = displayNahore.textContent[delka];
                pocitej();
                zpracujDalsiCislo();
            }
            break;
            
        case "jineZnamenko":
            if (displayDole.textContent === "") {
                displayNahore.textContent = 
                    displayNahore.textContent.substr(displayNahore.textContent[delka], 2) + 
                    " " + operator + " ";
            } else {
                operator = displayNahore.textContent[delka];
                pocitej();
                zpracujDalsiCislo();
                console.log(operator);
            }
            break;
       
        case "nahoreJeVyraz":
            zpracujPrvniCislo(displayDole.textContent);
            break;
    }
}; 

function pocitej () {
    displayNahore.textContent += displayDole.textContent + " = ";
    druhaHodnota = parseFloat(displayDole.textContent);
    switch (operator) {
        case "+":
            displayDole.textContent = prvniHodnota + druhaHodnota;    
            break;
        case "-":
            displayDole.textContent = prvniHodnota - druhaHodnota;
            break;
        case "*":
            displayDole.textContent = prvniHodnota * druhaHodnota;
            break;
        case "/":
            displayDole.textContent = prvniHodnota / druhaHodnota;
            break;          
    }
    if (displayDole.textContent === "Infinity") {      // dělení nulou
        setTimeout(function(){
            boomGif.classList.toggle("neviditelny");
        }, 900); 
        boomGif.classList.toggle("neviditelny");
    }
    prvniHodnota = parseFloat(displayDole.textContent);
};

function zpracujPrvniCislo (vyraz1) {    
    displayNahore.textContent = vyraz1 + " " + operator + " ";
    displayDole.textContent = "";
    prvniHodnota = parseFloat(vyraz1);
}

function zpracujDalsiCislo () {
    operator = novyOperator;  // beru si nově zmáčknuté znaménko pro horní zápis
    displayNahore.textContent = displayDole.textContent + " " + operator + " ";
    displayDole.textContent = "";      
}

//změna skinu
skin.addEventListener("change", () => {
    switch (skin.value) {
        case "helloKitty":
            document.querySelector(".display").style.backgroundColor = "lightpink";
            document.querySelector(".telo").style.backgroundImage="url('./img/hello-kitty.jpg')";
            break;
        case "SW":
            document.querySelector(".display").style.backgroundColor = "lightcyan";
            document.querySelector(".telo").style.backgroundImage="url(./img/sw.jpg)";   
            break;
    }    

});