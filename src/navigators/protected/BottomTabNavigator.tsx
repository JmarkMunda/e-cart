import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import CustomIcon from "../../components/CustomIcon";
import CategoriesScreen from "../../screens/CategoriesScreen";
import FavoritesScreen from "../../screens/FavoritesScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <CustomIcon family="Ionicons" name="home-outline" color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <CustomIcon family="Ionicons" name="list-outline" color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={() => ({
          tabBarBadge: 9,
          tabBarIcon: ({ color }) => (
            <CustomIcon family="Ionicons" name="heart-outline" color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <CustomIcon
              family="Ionicons"
              name="settings-outline"
              color={color}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
