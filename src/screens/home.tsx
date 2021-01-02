import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ContextApp } from "../../hooks/hooks";
import { PhotoGallery } from "../components/photo-gallery";

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

type RootStackParamList = {
  Photo: { id: string };
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Photo"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  loading: boolean;
};

export interface IImage {
  id?: string;
  urls?: any;
  user?: any;
  alt_description?: string | null;
}

export const Home: React.FC<Props> = ({ navigation, loading }) => {
  const { state } = useContext(ContextApp);

  return (
    <View style={styles.container}>
      {!loading && (
        <PhotoGallery navigation={navigation} images={state.images} />
      )}
    </View>
  );
};
