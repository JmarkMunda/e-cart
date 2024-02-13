import React from "react";
import LoginScreen from "../../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const PublicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default PublicNavigator;
