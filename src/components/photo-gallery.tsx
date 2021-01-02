import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { IImage } from "../screens/home";
import { ScrollView, View } from "react-native";
import { PhotoCard } from "./photo-card";

type RootStackParamList = {
  Photo: { id?: string };
};

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Photo"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  images: IImage[];
};

export const PhotoGallery: React.FC<Props> = ({ images, navigation }) => {
  return (
    <ScrollView>
      {images.map((image) => (
        <PhotoCard {...image} navigation={navigation} key={image.id} />
      ))}
    </ScrollView>
  );
};
