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


tlac1.addEventListener("click", () => {
    displayDole.textContent += tlac1.value;
});

tlac2.addEventListener("click", () => {
    displayDole.textContent += tlac2.value;
});

tlacPlus.addEventListener("click", () => {ulozPrvniCislo(displayDole.textContent, "+")});

function ulozPrvniCislo (cislo1, operator) {
    displayNahore.textContent = cislo1 + " " + operator;
}