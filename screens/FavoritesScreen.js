import React from "react";

import { View, StyleSheet } from "react-native";

import MealList from "../components/MealList";

import { MEALS } from "../data/dummy-data";

const FavoritesScreen = props => {
  const meals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return (
    <View style={styles.screen}>
      <MealList meals={meals} navigation={props.navigation} />
    </View>
  );
};

FavoritesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Favorites"
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavoritesScreen;
