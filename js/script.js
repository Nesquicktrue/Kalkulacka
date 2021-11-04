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
let pocetHodnot = 0; // zde ukládám počet zadaných hodnot, abych vyhodnotil opakované stisknuté tlačítko funkce

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
    pocitej();

});

tlacPlus.addEventListener("click", () => {
    overZadani("+");    
});

tlacMinus.addEventListener("click", () => {
    overZadani("-"); 
});

tlacKrat.addEventListener("click", () => {
    overZadani("*"); 
});

tlacDeleno.addEventListener("click", () => {
    overZadani("/"); 
});


// funkce pro zpracování
function overZadani (znamenko) {
    
    operator = znamenko;
    let stavOperace;
    let delka = displayNahore.textContent.length - 2;
    if (displayNahore.textContent == "") {
        zpracujPrvniCislo(displayDole.textContent);
        console.log("Zpracuji prvni cislo");

    } else if (displayNahore.textContent[delka] === znamenko) {
             stavOperace = "stejneznamenko";
             console.log("Zadáváte stejné znaménko početHodnot: " + pocetHodnot);
             return;
             
    } else if ( displayNahore.textContent[delka] === "+" ||
                displayNahore.textContent[delka] === "-" ||
                displayNahore.textContent[delka] === "*" ||
                displayNahore.textContent[delka] === "/"      
            ) {
            stavOperace = "jineznamenko"
            console.log ("Dávám znaménko: " + operator);
    } else {
            stavOperace = "nahoreJeVyraz"
            console.log("nahoře je výraz k počítání")
    };      
    
        
    switch (stavOperace) {
        case "stejneznamenko": 
            break;
            
        case "jineznamenko":
            break;
       
        default:
            break;
    }
}; 

function pocitej () {
    displayNahore.textContent += displayDole.textContent;
    druhaHodnota = parseInt(displayDole.textContent);
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
};

function zpracujPrvniCislo (vyraz1) {    
    displayNahore.textContent = vyraz1 + " " + operator + " ";
    displayDole.textContent = "";
    prvniHodnota = parseInt(vyraz1);
    ++pocetHodnot; 
}

function zpracujDalsiCislo (vyraz3) {
        
}

// function zpracujDruheCislo(vyraz2) {
//     displayNahore.textContent += displayDole.textContent;
//     druhaHodnota = parseInt(displayDole.textContent);
//     }