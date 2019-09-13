import React from "react";
import { useSelector } from "react-redux";

import { View, StyleSheet } from "react-native";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const categoryId = props.navigation.getParam("categoryId");
  const meals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (meals.length === 0 || !meals) {
    return (
      <View style={styles.screen}>
        <DefaultText>No meals meals found. Check out your filters!</DefaultText>
      </View>
    );
  }

  return <MealList meals={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  return {
    headerTitle: category.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoryMealsScreen;
