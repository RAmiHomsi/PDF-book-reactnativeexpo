import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const TheEdu = () => {
  return (
    <WebView
      source={{
        uri: "https://drive.google.com/file/d/1_hi84LDlqtjaAjTS2h_sFYamx6Ojqqko/view",
      }}
      style={{ flex: 1 }}
    />
  );
};

export default TheEdu;
