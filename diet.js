function handleAnswer(answer) {
  const response = document.getElementById("response");
  const explore = document.getElementById("explore");
  const menu = document.getElementById("menu");
  const recipes = document.getElementById("recipes");
  const questionDiv = document.querySelector(".question"); // Get the question div

  response.classList.remove("hidden");

  if (answer === "yes") {
    response.innerText = "Perfect! You're at the right place 🍽️";
    explore.classList.remove("hidden");
    // Ensure other elements are hidden when 'yes' is clicked initially
    menu.classList.add("hidden");
    recipes.classList.add("hidden");
    // Keep the question visible as it's the main interaction point
    questionDiv.classList.remove("hidden");
  } else {
    response.innerText = "Alright, maybe next time!";
    explore.classList.add("hidden"); // Hide the "Explore Menu" button
    menu.classList.add("hidden"); // Hide the diet options
    recipes.classList.add("hidden"); // Hide the recipe content
    // Keep the question visible
    questionDiv.classList.remove("hidden");
  }
}

function showMenu() {
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("explore").classList.add("hidden"); // Hide "Explore Menu" when menu is shown
  document.getElementById("response").classList.add("hidden"); // Hide response message when menu is shown
}

function showRecipe(dietType) {
  const recipesContent = {
    keto: `<h3>Keto Diet Recipes</h3>
           <ul>
             <li><a href="https://www.youtube.com/watch?v=JslxGslD95g" target="_blank">Keto Chicken Recipe</a></li>
             <li><a href="https://www.youtube.com/watch?v=dZ_62hWZq5s" target="_blank">Low Carb Breakfast</a></li>
           </ul>`,
    vegan: `<h3>Vegan Diet Recipes</h3>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=1n4VfPkvhrY" target="_blank">Vegan Dinner Idea</a></li>
              <li><a href="https://www.youtube.com/watch?v=lJ3G3jKRGx8" target="_blank">Easy Vegan Salad</a></li>
            </ul>`,
    highProtein: `<h3>High Protein Recipes</h3>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=ULA4a6iZa1U" target="_blank">Protein Smoothie</a></li>
              <li><a href="https://www.youtube.com/watch?v=shLD2S5ZjQo" target="_blank">Grilled Chicken Bowl</a></li>
            </ul>`,
    lowFat: `<h3>Low Fat Recipes</h3>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=ZlIuNnUSY8I" target="_blank">Low Fat Stir Fry</a></li>
              <li><a href="https://www.youtube.com/watch?v=aGbLOUlP-kg" target="_blank">Healthy Rice Bowl</a></li>
            </ul>`,
    mediterranean: `<h3>Mediterranean Recipes</h3>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=OqFw-3zVZkM" target="_blank">Greek Salad</a></li>
              <li><a href="https://www.youtube.com/watch?v=bs_wDZ0KrP4" target="_blank">Hummus with Veggies</a></li>
            </ul>`,
  };

  document.getElementById("recipes").classList.remove("hidden");
  document.getElementById("recipeContent").innerHTML = recipesContent[dietType];
  document.getElementById("menu").classList.add("hidden");
}

function backToMenu() {
  document.getElementById("recipes").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}
