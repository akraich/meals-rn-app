import React from "react";
import { useSelector } from "react-redux";

import { View, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.screen}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <MealList meals={favoriteMeals} navigation={props.navigation} />
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
