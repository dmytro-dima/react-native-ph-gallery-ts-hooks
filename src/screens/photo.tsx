import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ContextApp } from "../../hooks/hooks";
import { PhotoDetails } from "../components/photo-details";

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

type RootStackParamList = {
  ["Photo gallery"]: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Photo gallery"
>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Photo gallery">;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

export const Photo: React.FC<Props> = ({ route }) => {
  const { state } = useContext(ContextApp);
  let { id }: any = route.params;

  const image = state.images.find((img) => img.id === id);

  return (
    <View style={styles.container}>
      <PhotoDetails image={image} />
    </View>
  );
};
