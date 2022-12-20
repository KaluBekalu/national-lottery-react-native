import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CText from "../components/CText";

const NewsDetails = () => {
  const data = {
    title: "የእንቁጣጣሽ ሎተሪ 1ኛ ዕጣ አሸናፊ",
    details:
      "የብሔራዊ ሎተሪ አስተዳደር ለመጀመርያ ጊዜ አድማስ ድጂታል ሎተሪን በ605 ላይ ማንኛውም ፊደል በመላክ ወይም በቴሌብር ወደ *127# በመደወል ዕጣውን በመቁረጥ እና የአንደኛ ዕጣው 1.5 ሚሊዮን ብር ጨምሮ በርካታ ዕጣዎችን ይዞ ገበያ ላይ ያዋለ ሲሆን የመጀመሪያው ዙር  ዕጣው ነሐሴ 13/2024 ወጥቷል፡፡ የዲጂታል ሎተሪ ዕጣው ቀጣይነት ያለው ሲሆን የሁለተኛ ዙር  ዕጣው  መስከረም 11 ቀን 2015 የሚወጣ መሆኑን እየገለጽን በ605 ላይ ማንኛውም ፊደል በመላክ ወይም በቴሌብር ወደ *127# በመደወል በ3ብር ቆርጠው ዕድልዎ የሚሞክሩበት  ዘመናዊ የሎተሪ  ጨዋታ  መሆኑን አስተዳደሩ ለደንበኞቹ ይገልጻል፡፡ \nይቁረጡ ይሸለሙ!\n\nመልካም ዕድል!\n\nየብሔራዊ ሎተሪ አስተዳደር  ከኢትዮ ቴሌኮም ጋር በመተባበር",
    img: require("../../assets/images/testimonial-news-image.png"),
    date: new Date().toDateString(),
  };

  return (
    <View style={{ padding: 10 }}>
      <CText
        content={data.title}
        style={{ fontWeight: "bold", marginBottom: 10 }}
      />
      <Image
        source={data.img}
        style={{
          width: "100%",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      />
      <CText
        style={{ marginVertical: 20, textAlign: "justify" }}
        content={data.details}
      />
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({});
