import * as model from './model.js';
import recipeView from './veiws/recipeView.js';
import searchView from './veiws/searchView.js';
import resultsView from './veiws/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query 
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSerachRsults(query);

    // 3) Render results 
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
  } catch (err) {
    console.log(err);
  }
}


const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();