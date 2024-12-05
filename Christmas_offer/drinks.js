// Recipes Data
const recipes = {
    recipe1: `<h3>Mulled Cranberry Cider</h3><p>Ingredients: Fresh cranberries, orange zest, cinnamon sticks, cloves, and apple cider.</p>`,
    recipe2: `<h3>Peppermint Hot Chocolate</h3><p>Ingredients: Milk, cocoa powder, sugar, and peppermint extract.</p>`,
    recipe3: `<h3>Classic Eggnog</h3><p>Ingredients: Milk, cream, eggs, sugar, and nutmeg.</p>`,
    recipe4: `<h3>Zesty Cranberry Mocktail</h3><p>Ingredients: Cranberry juice, lime, sparkling water, and mint leaves.</p>`,
};

// Show Recipe on Button Click
document.querySelectorAll('.snow-button').forEach(button => {
    button.addEventListener('click', () => {
        const recipeId = button.dataset.recipe;
        document.getElementById('recipe-content').innerHTML = recipes[recipeId];
        document.querySelector('.recipes').classList.add('visible');
    });
});

// Close Recipe
document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.recipes').classList.remove('visible');
});
