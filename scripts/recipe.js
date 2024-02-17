// Define constants for API credentials and endpoint
const APP_ID = 'c82fbd75';
const APP_KEY = 'bc8ae484a791f3f9ed9fb54ed5be05cd';
const API_ENDPOINT = 'https://api.edamam.com/search';

// Function to fetch gluten-free or all recipes
async function fetchRecipes(query) {
   const response = await fetch(`${API_ENDPOINT}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data = await response.json();
   return data.hits.map(hit => hit.recipe);  
}

async function fetchAndDisplayRecipes() {
    const recipeOptions = document.getElementById('recipeOptions');
    const selectedOption = recipeOptions.value;

    let recipes = '';
    if (selectedOption === 'all') {
      recipes = await fetchRecipes('cookie');
    } else if (selectedOption === 'gluten-free') {
      recipes = await fetchRecipes('gluten-free cookie');
    }

    displayRecipes(recipes);
}

// Function to update the DOM with fetched recipes
function displayRecipes(recipes) {
  const recipeList = document.getElementById('recipeList');

  // Clear any existing recipes
  recipeList.innerHTML = '';

  // Iterate over the recipes and create list items for each
  recipes.forEach(recipe => {
    // Create new list item
    const listItem = document.createElement('li');

    // Add h3 Element to HTML properties
    const recipeName = document.createElement('h3');
    recipeName.textContent = recipe.label;

    // Create a div to contain the image
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container'); // Add a class for styling
    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.label;
    imageContainer.appendChild(recipeImage); // Append the image to the container

    // Create a div to contain the link
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('link-container'); // Add a class for styling
    const recipeLink = document.createElement('a');
    recipeLink.href = recipe.url;
    recipeLink.textContent = 'View Recipe';
    linkContainer.appendChild(recipeLink); // Append the link to the container

    // Append recipe data to list item
    listItem.appendChild(recipeName);
    listItem.appendChild(imageContainer); // Append the image container
    listItem.appendChild(linkContainer); // Append the link container

    // Append list item to the recipe list
    recipeList.appendChild(listItem);
  });
}


// Add event listener to fetch and display recipes when the user changes the selection
const recipeOptions = document.getElementById('recipeOptions');
recipeOptions.addEventListener('change', fetchAndDisplayRecipes);

// Fetch and display recipes when the page loads
fetchAndDisplayRecipes();
