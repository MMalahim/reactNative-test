import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./src/store/store";
import RootNavigator from "./src/navigation/RootNavigator";
import Layout from "./src/Layout";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
        <Layout />
      </NavigationContainer>
    </Provider>
  );
}
