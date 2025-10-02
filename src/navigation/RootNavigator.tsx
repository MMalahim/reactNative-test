import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import TaskScreen from "../screens/TaskScreen";
import LoginScreen from "../screens/LoginScreen";
import CustomHook from "../screens/CustomHook";
import LoginDetails from "../screens/LoginDetails";

export type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
};

export type RootStackParamList = {
  Task: undefined;
  Home: undefined;
  Details: { user: User };
  Login: undefined;
  LoginD: undefined;
  Custom: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Task">
      <Stack.Screen
        name="Task"
        component={TaskScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Details Screen" }}
      />
      <Stack.Screen
        name="LoginD"
        component={LoginDetails}
        options={{ title: "Login Details" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login Screen" }}
      />
      <Stack.Screen
        name="Custom"
        component={CustomHook}
        options={{ title: "Custom Hook" }}
      />
    </Stack.Navigator>
  );
}
