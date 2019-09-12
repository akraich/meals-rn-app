import React, { useState } from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { View, Text, Switch, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const FilterSWitch = props => (
  <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch
      trackColor={{ true: Colors.primary }}
      thumbColor={Colors.primary}
      value={props.state}
      onValueChange={props.onChange}
    />
  </View>
);

const FiltersScreen = props => {
  [isGlutenFree, setIsGlutenFree] = useState(false);
  [isLactoseFree, setIsLactoseFree] = useState(false);
  [isVegan, setIsVegan] = useState(false);
  [isVegetarian, setIsVegetarian] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/Restrictions</Text>
      <FilterSWitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSWitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSWitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSWitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Filtered Meals",
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
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    margin: 20
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10
  }
});

export default FiltersScreen;
