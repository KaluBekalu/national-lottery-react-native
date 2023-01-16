import { ScrollView } from "react-native";
import CText from "../components/CText";
import React, { useEffect, useState } from "react";
import { Text, Image, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../constants/colors";

const StoryDetails = ({ route }) => {
  const news = route.params.news;

  const youtubeRegex = /(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/gi;

  const renderThumbnail = (uri: any, link: string) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 0,
        }}
        onPress={() => {
          Linking.openURL(link);
        }}
      >
        <Image
          style={{ width: 300, height: 200, borderRadius: 10 }}
          source={{ uri }}
        />
        <Icon
          size={40}
          style={{
            position: "absolute",
            backgroundColor: "#00000040",
            borderRadius: 2000,
          }}
          color={colors.white}
          name="playcircleo"
        />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ScrollView style={{ padding: 15 }}>
      {news.image ? (
        <Image
          source={{ uri: news.image }}
          style={{
            width: "100%",
            height: 250,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
      ) : null}
      <Text style={{}}>
        {news.description?.split(" ").map((word, index) => {
          if (youtubeRegex.test(word)) {
            const videoId = word.split("v=")[1];
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            return renderThumbnail(thumbnailUrl, word);
          } else {
            return `${word} `;
          }
        })}
      </Text>
    </ScrollView>
  );
};

export default StoryDetails;
