import React from "react";

import { View, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

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
    headerTitle: "Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
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
