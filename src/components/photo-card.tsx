import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { Card } from "react-native-elements";
import { ProfileScreenNavigationProp } from "./photo-gallery";

type Props = {
  navigation: ProfileScreenNavigationProp;
  id?: string;
  urls?: any;
  user?: any;
  alt_description?: string | null;
};

export const PhotoCard: React.FC<Props> = ({
  navigation,
  id,
  user,
  alt_description,
  urls,
}) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("Photo", { id })}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
    >
      <Card>
        <Card.Title>
          <Text style={{ marginBottom: 10 }}>{user.name}</Text>
        </Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: urls.regular }}></Card.Image>
        <Text style={{ marginBottom: 10 }}>
          {alt_description && alt_description}
        </Text>
      </Card>
    </TouchableHighlight>
  );
};
