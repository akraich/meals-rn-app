import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { View, ScrollView, Text, Image, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

import { toggleFavorite } from "../store/actions/meals";

const ListItem = props => (
  <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
);

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector(state => state.meals.meals);
  const isFavMeal = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );
  const meal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler
    });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({
      isFav: isFavMeal
    });
  }, [isFavMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{meal.duration}m</DefaultText>
        <DefaultText>{meal.complexity}</DefaultText>
        <DefaultText>{meal.affordability}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map(ing => (
        <ListItem key={ing}>{ing}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const isFav = navigationData.navigation.getParam("isFav");
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
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
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: 200
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 15,
    padding: 5,
    borderColor: "#ccc",
    borderWidth: 1
  }
});

export default MealDetailScreen;
