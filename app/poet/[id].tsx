import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";
import { POET_DATA } from "@/constants/BooksData";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const Page = () => {
  // Get the ID from the route parameters
  const { id } = useLocalSearchParams();

  // Convert ID to a number
  const poetId = Number(id);

  // Find the poet using the poetId
  const poet = POET_DATA.find((p) => p.id === poetId);

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient colors={["#ECE9E6", "#28282B"]} style={styles.gradient}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <AntDesign name="leftcircleo" size={40} color="white" />
          </Pressable>
          <Text style={styles.title}>{poet?.title}</Text>
        </View>

        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.text}>{poet?.text}</Text>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "rgb(64 64 64)",
    textAlign: "center",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    lineHeight: 24,
  },
});
