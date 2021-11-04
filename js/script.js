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

const displayDole = document.querySelector(".displayDole");
const displayNahore = document.querySelector(".displayNahore");

let prvniHodnota; // zde ukládám čísla pro výpočet
let druhaHodnota;
let operator; // zde ukládám operator matematické funkce
let delka; // pozice pro znak znaménka ve stringu displayNahore.textcontent 

// eventy pro tlačítka čísel
tlac1.addEventListener("click", () => {
    displayDole.textContent += tlac1.value;
});

tlac2.addEventListener("click", () => {
    displayDole.textContent += tlac2.value;
});

tlac3.addEventListener("click", () => {
    displayDole.textContent += tlac3.value;
});

tlac4.addEventListener("click", () => {
    displayDole.textContent += tlac4.value;
});

tlac5.addEventListener("click", () => {
    displayDole.textContent += tlac5.value;
});

tlac6.addEventListener("click", () => {
    displayDole.textContent += tlac6.value;
});

tlac7.addEventListener("click", () => {
    displayDole.textContent += tlac7.value;
});

tlac8.addEventListener("click", () => {
    displayDole.textContent += tlac8.value;
});

tlac9.addEventListener("click", () => {
    displayDole.textContent += tlac9.value;
});

tlac0.addEventListener("click", () => {
    displayDole.textContent += tlac0.value;
});

// eventy pro tlacitka matematických funkcí
tlacRovna.addEventListener("click", () => {
    if (displayDole.textContent != "") {pocitej()};
});

tlacPlus.addEventListener("click", () => {
    if (displayDole.textContent != "") {overZadani("+")};    
});

tlacMinus.addEventListener("click", () => {
    if (displayDole.textContent != "") {overZadani("-")};   
    overZadani("-"); 
});

tlacKrat.addEventListener("click", () => {
    if (displayDole.textContent != "") {overZadani("*")};   
});

tlacDeleno.addEventListener("click", () => {
    if (displayDole.textContent != "") {overZadani("/")};   
});

// funkce pro zpracování
function overZadani (znamenko) {
    let stavOperace;
    delka = displayNahore.textContent.length - 2; 
    operator = znamenko;
    
    if (displayNahore.textContent == "") {
        zpracujPrvniCislo(displayDole.textContent);

    } else if (displayNahore.textContent[delka] === znamenko) {
             stavOperace = "stejneZnamenko";

    } else if ( displayNahore.textContent[delka] === "+" ||
                displayNahore.textContent[delka] === "-" ||
                displayNahore.textContent[delka] === "*" ||
                displayNahore.textContent[delka] === "/"      
            ) {
            stavOperace = "jineZnamenko"

    } else {
            stavOperace = "nahoreJeVyraz"
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
                // !!BUG - řádek níže přepíše i záporná čísla !!! změň úpravu jen posledního znaku
                displayNahore.textContent = displayNahore.textContent.replace(/[^0-9\ ]+/g, operator); 
                console.log ("Měním znaménko na: " + operator);
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
    displayNahore.textContent += displayDole.textContent;
    druhaHodnota = Math.floor(displayDole.textContent);
    console.log(prvniHodnota + " : " + typeof(prvniHodnota));
    console.log(operator + " : znaménko");
    console.log(druhaHodnota + " : " + typeof(druhaHodnota));
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
    prvniHodnota = Math.floor(displayDole.textContent);
};

function zpracujPrvniCislo (vyraz1) {    
    displayNahore.textContent = vyraz1 + " " + operator + " ";
    displayDole.textContent = "";
    prvniHodnota = Math.floor(vyraz1);
}

function zpracujDalsiCislo () {
    displayNahore.textContent = displayDole.textContent + " " + operator + " ";
    displayDole.textContent = "";      
}

function zpracujDruheCislo() {
     displayNahore.textContent += displayDole.textContent;
     druhaHodnota = parseInt(displayDole.textContent);
}