import React from "react";

import { FlatList, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";
import { Colors } from "../constants/Colors";

const CategoriesScreen = props => {
  const renderGridItem = itemData => (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() =>
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id
          }
        })
      }
    />
  );
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
