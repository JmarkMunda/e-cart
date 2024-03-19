import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../screens/HomeScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomIcon from "../../components/CustomIcon";
import { TouchableOpacity, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header/ScreenHeader";

const Stack = createNativeStackNavigator();

const ProtectedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Bottom Tab">
      <Stack.Screen
        name="Bottom Tab"
        component={BottomTabNavigator}
        options={{
          headerShadowVisible: false,
          headerTransparent: true,
          headerTitle: "",
          header: () => <Header />,
          // headerLeft: () => <SearchBar />,
          // headerRight: ({ tintColor }) => (
          //   <View style={{ gap: 16, flexDirection: "row" }}>
          //     <TouchableOpacity>
          //       <CustomIcon
          //         family="Ionicons"
          //         name="search-outline"
          //         color={tintColor}
          //       />
          //     </TouchableOpacity>
          //     <TouchableOpacity>
          //       <CustomIcon
          //         family="Ionicons"
          //         name="cart-outline"
          //         color={tintColor}
          //       />
          //     </TouchableOpacity>
          //   </View>
          // ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
