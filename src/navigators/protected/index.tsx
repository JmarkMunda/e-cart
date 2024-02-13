import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../screens/HomeScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const ProtectedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Bottom Tab">
      <Stack.Screen
        name="Bottom Tab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
