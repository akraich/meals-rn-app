import React from "react";

import { View, Text, FlatList, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
  const renderListItem = itemData => (
    <MealItem
      title={itemData.item.title}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity.toUpperCase()}
      affordability={itemData.item.affordability.toUpperCase()}
      imageUrl={itemData.item.imageUrl}
      onSelect={() => {
        props.navigation.navigate({
          routeName: "MealDetail",
          params: {
            mealId: itemData.item.id
          }
        });
      }}
    />
  );
  return (
    <FlatList
      style={{ width: "100%" }}
      keyExtractor={(item, index) => item.id}
      data={meals}
      renderItem={renderListItem}
    />
  );
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
