import React from "react";
import { FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = props => {
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
