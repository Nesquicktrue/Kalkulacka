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

// eventy pro tlačítka čísel
tlac1.addEventListener("click", () => {
    displayDole.textContent += tlac1.value;
});

tlac2.addEventListener("click", () => {
    displayDole.textContent += tlac2.value;
});

// eventy pro tlacitka matematických funkcí
tlacRovna.addEventListener("click", () => {
    ulozDruheCislo (displayDole.textContent);
    propisDruheNahoru (displayDole.textContent);
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
});

tlacPlus.addEventListener("click", () => {
    ulozPrvniCislo (displayDole.textContent);
    propisPrvniNahoru(displayDole.textContent, "+");
});

tlacMinus.addEventListener("click", () => {
    ulozPrvniCislo (displayDole.textContent);
    propisPrvniNahoru(displayDole.textContent, "-");
});

tlacKrat.addEventListener("click", () => {
    ulozPrvniCislo (displayDole.textContent);
    propisPrvniNahoru(displayDole.textContent, "*");
});

tlacDeleno.addEventListener("click", () => {
    ulozPrvniCislo (displayDole.textContent);
    propisPrvniNahoru(displayDole.textContent, "/");
});

// funkce pro zpracování
function propisPrvniNahoru (vyraz1, znamenko) {
    displayNahore.textContent = vyraz1 + " " + znamenko + " ";
    displayDole.textContent = "";
    operator = znamenko;
}

function propisDruheNahoru(vyraz2) {
    displayNahore.textContent += vyraz2;
}

function ulozPrvniCislo (num1) {
    prvniHodnota = parseInt(num1);
}

function ulozDruheCislo (num1) {
    druhaHodnota = parseInt(num1);
}