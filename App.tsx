import React, { useEffect, useReducer, useState } from "react";
import { reducer } from "./store/reducer";
import { initialState } from "./store/initialState";
import { fetchImages } from "./store/actions";
import { ContextApp } from "./hooks/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/screens/home";
import { Photo } from "./src/screens/photo";
import { Header } from "./src/components/header";
import { createStackNavigator } from "@react-navigation/stack";

type RootStackParamList = {
  ["Photo gallery"]: undefined;
  Photo: { id: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchImages(dispatch).then(() => setLoading(false));
  }, []);

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      <Header />
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Photo gallery">
          <RootStack.Screen name="Photo gallery">
            {(props) => <Home {...props} loading={loading} />}
          </RootStack.Screen>
          <RootStack.Screen
            name="Photo"
            initialParams={{ id: "" }}
            component={Photo}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ContextApp.Provider>
  );
}
