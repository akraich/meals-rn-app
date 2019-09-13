import * as actionTypes from "./actionTypes";

export const toggleFavorite = mealId => {
  return {
    type: actionTypes.TOGGLE_FAVORITE,
    mealId: mealId
  };
};

export const applyFilters = filters => {
  return {
    type: actionTypes.APPLY_FILTERS,
    isGlutenFree: filters.isGlutenFree,
    isVegan: filters.isVegan,
    isVegetarian: filters.isVegetarian,
    isLactoseFree: filters.isLactoseFree
  };
};
