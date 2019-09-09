import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Text>{category.title}</Text>
      <Button
        title="Go to meal detail"
        onPress={() => props.navigation.navigate({ routeName: "MealDetail" })}
      />
    </View>
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
