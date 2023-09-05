export const addRecipe = (recipe) => {
    return { 
      type: 'favoriteRecipes/addRecipe', 
      payload: recipe 
    };
  }
  
  export const removeRecipe = (recipe) => {
    return { 
      type: 'favoriteRecipes/removeRecipe', 
      payload: recipe 
    };
  }
   
  const initialFavoriteRecipes = [];
  export const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
    switch(action.type) {
        /* The new value should be a new array that includes all the previously added values
         in addition to the new recipe (from action.payload) added to the end. */
      case 'favoriteRecipes/addRecipe':
        return [...favoriteRecipes, action.payload]

        /* The favoriteRecipes slice should be a new array that includes all the existing values
        from state.favoriteRecipes except for the recipe from action.payload. */
      case 'favoriteRecipes/removeRecipe':
        return favoriteRecipes.filter(recipe => {
          return recipe.id !== action.payload.id
        });
      default:
        return favoriteRecipes;
    }
  }