document.addEventListener('DOMContentLoaded', () => {
  const recipeOptions = document.getElementById('recipeOptions');
  const recipeList = document.getElementById('recipeList');

  // Fetch recipes from the mock API
  const fetchRecipes = async (option) => {
      let url;
      if (option === 'all') {
          url = 'https://api.mocki.io/v1/aeb990bc'; // Mock API URL for all recipes
      } else {
          url = `https://api.mocki.io/v1/aeb990bc/${option}`; // Mock API URL for specific recipe type
      }

      try {
          const response = await fetch(url);
          const data = await response.json();
          displayRecipes(data);
      } catch (error) {
          console.error('Error fetching recipes:', error);
      }
  };

  // Display recipes in the DOM
  const displayRecipes = (recipes) => {
      recipeList.innerHTML = ''; // Clear previous recipes

      recipes.forEach(recipe => {
          const listItem = document.createElement('li');
          listItem.textContent = `${recipe.name} - ${recipe.description}`;
          recipeList.appendChild(listItem);
      });
  };

  // Event listener for when an option is selected
  recipeOptions.addEventListener('change', () => {
      const selectedOption = recipeOptions.value;
      fetchRecipes(selectedOption);
  });

  // Fetch all recipes initially
  fetchRecipes('all');
});
