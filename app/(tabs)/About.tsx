import React from "react";
import { Text, ScrollView, StyleSheet, SafeAreaView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const About = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient colors={["#ECE9E6", "#28282B"]} style={styles.gradient}>
        <View style={styles.header}>
          <Text style={styles.title}>حول</Text>
        </View>

        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.text}>
            هذا التطبيق هو نموذج بسيط لرسالة الماجستير للانسة سوزان الاسعد عن
            كيفية توظيف التكنولوجيا لتسهيل و تطوير مهارات تعلم اللغة العربية
            بشكل تفاعلي اكثر. يحتوي التطبيق على كتاب اللغة العربية للصف التاسع
            مع امكانية تحميل الكتاب و نبذة عن حياة الشعراء الذين تم ذكرهم في
            الكتاب اضافة الى ميزة حل بعض الاسئلة النموذجية للامتحان و التواصل مع
            المعلمة.
          </Text>
          <Text style={styles.text} className="mt-7">
            تمت برمجة التطبيق بمساعدة المبرمج رامي الحمصي
          </Text>
          <Text style={styles.text} className="mt-7">
            نشكركم على اختيارنا.
          </Text>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default About;

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
