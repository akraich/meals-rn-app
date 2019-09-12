import React from "react";

import MealList from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  return <MealList meals={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  return {
    headerTitle: category.title
  };
};

export default CategoryMealsScreen;
