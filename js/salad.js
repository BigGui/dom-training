/**
 * Get current number of ingredients in the salad.
 * @returns {number} number of ingredients
 */
function saladCount() {
    return saladList.children.length;
}

/**
 * Display the number of ingredient on page.
 */
function saladCountUpdate() {
    document.getElementById("salad-count").innerText = saladCount();
}

/**
 * Create a button element in a li with the given ingredient name.
 * Add the li element to the ul with id "salad-ingredients".
 * @param {*} ingredientName - Ingredient name to display
 * @returns {element} button element create
 */
function createIngredientElement(ingredientName) {
    const button = document.createElement("button");
    const li = document.createElement("li");
    li.appendChild(button);
    document.getElementById("salad-ingredients").appendChild(li);
    button.className = "button";
    button.innerText = ingredientName;

    return button;
}

const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];

const ingredientList = document.getElementById("salad-ingredients");
const saladList = document.getElementById("salad-final");

ingredients.forEach(function (ingredient) {
    createIngredientElement(ingredient)
        .addEventListener("click", function (event) {
            const listFrom = this.closest('ul');

            if (listFrom === ingredientList && saladCount() >= 5) return false;

            (listFrom === ingredientList ? saladList : ingredientList).appendChild(this.parentElement);

            saladCountUpdate();
        });
})
