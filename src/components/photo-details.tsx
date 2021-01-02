import * as React from "react";
import { IImage } from "../screens/home";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

type Props = {
  image?: IImage;
};

export const PhotoDetails: React.FC<Props> = ({ image }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Card.Image source={{ uri: image?.urls.regular }}></Card.Image>
      <Text>{image?.user.name}</Text>
      <Text>{image?.alt_description && image?.alt_description}</Text>
    </View>
  );
};
