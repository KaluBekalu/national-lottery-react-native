import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CText from "../components/CText";

const NewsDetails = ({ route }) => {
  const news = route.params.news;

  return (
    <ScrollView style={{ padding: 10 }}>
      <CText
        content={news.title}
        style={{ fontWeight: "bold", marginBottom: 10 }}
      />
      <Image
        source={{ uri: news.image }}
        style={{
          width: "100%",
          height: 250,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      />
      <CText
        style={{ marginVertical: 20, textAlign: "justify" }}
        content={news.description}
      />
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({});
