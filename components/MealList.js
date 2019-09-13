import React from "react";
import { useSelector } from "react-redux";

import { FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const renderListItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
    return (
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
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite
            }
          });
        }}
      />
    );
  };
  return (
    <FlatList
      style={{ width: "100%" }}
      keyExtractor={(item, index) => item.id}
      data={props.meals}
      renderItem={renderListItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealList;
