import React from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { Colors } from "../constants/Colors";

const CategoriesScreen = props => {
  const renderGridItem = itemData => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() =>
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id
          }
        })
      }
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
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
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
