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
    zpracujDruheCislo (displayDole.textContent);
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
    zpracujPrvniCislo(displayDole.textContent, "+");
});

tlacMinus.addEventListener("click", () => {
    zpracujPrvniCislo(displayDole.textContent, "-");
});

tlacKrat.addEventListener("click", () => {
    zpracujPrvniCislo(displayDole.textContent, "*");
});

tlacDeleno.addEventListener("click", () => {
    zpracujPrvniCislo(displayDole.textContent, "/");
});

// funkce pro zpracování
function zpracujPrvniCislo (vyraz1, znamenko) {
    
    displayNahore.textContent = vyraz1 + " " + znamenko + " ";
    displayDole.textContent = "";

    prvniHodnota = parseInt(vyraz1);
    operator = znamenko;
}

function zpracujDruheCislo(vyraz2) {
    displayNahore.textContent += vyraz2;
    druhaHodnota = parseInt(vyraz2);
}