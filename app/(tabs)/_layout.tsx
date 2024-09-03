import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

const Page = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="TheEdu"
        options={{
          tabBarLabel: "الكتاب",
          tabBarIcon: ({}) => <Entypo name="book" size={20} color="black" />,
        }}
      />

      <Tabs.Screen
        name="TheBook"
        options={{
          tabBarLabel: "الشعراء",
          tabBarIcon: ({}) => (
            <Ionicons name="people" size={20} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Homework"
        options={{
          tabBarLabel: "الواجب",
          tabBarIcon: ({}) => (
            <FontAwesome6 name="pencil" size={20} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          tabBarLabel: "حول",
          tabBarIcon: ({}) => (
            <AntDesign name="questioncircleo" size={20} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Page;
