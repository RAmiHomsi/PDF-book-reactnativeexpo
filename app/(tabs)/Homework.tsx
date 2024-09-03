import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const Homework = () => {
  return (
    <WebView
      source={{
        uri: "https://forms.gle/hyuRqpTHNbtzgpnb9",
      }}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 50,
      }}
    />
  );
};

export default Homework;
