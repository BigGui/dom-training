/* ------------------------------------ */
/* --- Exercice 1 --- */

document.querySelector("#button1").addEventListener('click', function (event) {
    document.querySelector("#text1").classList.toggle('text-hidden');
});

/* ------------------------------------ */
/* --- Exercice 2 --- */

window.addEventListener('scroll', function () {
    document.getElementById('ex2-scroll-value').textContent = Math.floor(window.scrollY);
});

/* ------------------------------------ */
/* --- Exercice 3 --- */

/* When we click on the button "#ex3 .js-btn-animal",
it puts the first child at the end of the list.  */

document.querySelector("#ex3 .js-btn-animal")
    .addEventListener("click", function () {
        document.querySelector("#ex3-animals")
            .append(document.querySelector("#ex3-animals li:first-child"));
    });

/* ------------------------------------ */
/* --- Exercice 4 --- */
let i = 0;
const arrayColors = [
    "blue",
    "red",
    "green",
]
const btnEx4 = document.querySelector(".btnex4");
btnEx4.addEventListener("click", function(event) {
    btnEx4.classList.add(arrayColors[i % arrayColors.length]);
    btnEx4.classList.remove(arrayColors[(i - 1) % arrayColors.length]);

    // if (arrayColors[i] === 0) {
    //     btnEx4.classList.remove("green")
    // }
    // if (count === 1) {
    //     btnEx4.classList.replace("blue", "red");
        
    // }

    // if (count === 2) {
    //     btnEx4.classList.replace("red", "green");
    //     count = -1;

    // }
    i++;
})


/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
