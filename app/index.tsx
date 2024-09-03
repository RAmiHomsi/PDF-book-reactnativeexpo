import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1622137879013-beaca5144a4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)"]}
          className="flex-1"
        >
          <SafeAreaView style={styles.container}>
            <SafeAreaView className="flex flex-1 px-1 justify-between">
              <View>
                <Text className="text-center text-white font-bold text-3xl">
                  أهلاً بك في تطبيق اللغة العربية
                </Text>
              </View>

              <View>
                <CustomButton
                  onPress={() => router.push("/TheBook")}
                  title="ابدا الان"
                />
              </View>

              <StatusBar style="light" />
            </SafeAreaView>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
