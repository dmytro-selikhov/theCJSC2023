import * as model from './model.js';
import recipeView from './veiws/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime';
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
}


const array1 = ['hashchange', 'load']
array1.forEach(ev => window.addEventListener(ev, controlRecipes));
// array1.forEach(ev => window.addEventListener(ev, showRecipe));

// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

