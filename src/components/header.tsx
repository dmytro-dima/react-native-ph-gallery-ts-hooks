import React from "react";
import { ImageBackground, Text } from "react-native";

export const Header = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-3.png",
      }}
      style={{ width: "100%", height: 70 }}
    />
  );
};
