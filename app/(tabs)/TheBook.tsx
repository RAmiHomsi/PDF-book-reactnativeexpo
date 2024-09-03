import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

import { POET_DATA } from "@/constants/BooksData";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const TheBook = () => {
  return (
    <View className="flex-1">
      <LinearGradient colors={["#ECE9E6", "#28282B"]} className="flex-1">
        <SafeAreaView style={styles.container}>
          <View className="mb-6">
            <Text className="text-neutral-700 mb-3 font-bold text-4xl text-center">
              شاعر و قصيدة
            </Text>
          </View>
          <View>
            <FlatList
              data={POET_DATA}
              contentContainerStyle={styles.list}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => router.push(`/poet/${item.id}`)}
                  className="h-48 my-3 rounded-md overflow-hidden"
                >
                  <ImageBackground
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    style={styles.backgroundImage}
                  >
                    <LinearGradient
                      // Gradient from transparent to black
                      colors={["transparent", "rgba(0,0,0,0.8)"]}
                      style={styles.gradient}
                    >
                      <Text className="text-neutral-300 text-3xl font-bold text-center">
                        {item.title}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </Pressable>
              )}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default TheBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  list: {
    paddingBottom: 150,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  gradient: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
});
