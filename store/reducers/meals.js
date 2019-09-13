import * as actionTypes from "../actions/actionTypes";

import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      let updatedFavoriteMeals;
      const existingMeal = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (existingMeal >= 0) {
        updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingMeal, 1);
        console.log(updatedFavoriteMeals.length);
      } else {
        const newFavMeal = state.meals.find(meal => meal.id === action.mealId);
        updatedFavoriteMeals = [...state.favoriteMeals].concat(newFavMeal);
      }
      return {
        ...state,
        favoriteMeals: updatedFavoriteMeals
      };
    case actionTypes.APPLY_FILTERS:
      const currentMeals = state.meals.filter(meal => {
        if (action.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (action.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (action.isVegan && !meal.isVegan) {
          return false;
        }
        if (action.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals: currentMeals
      };
    default:
      return state;
  }
};

export default mealsReducer;
