import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import CText from "../components/CText";
import colors from "../constants/colors";
import Gradient from "../components/Gradient";
import routes from "../navigations/routes";
import { Lotteries } from "../components/Lotteries";
import { Cards } from "../components/Cards";
import { getLotteries } from "../utils/lotteries";
import { ILotteries, ILottery } from "../utils/types";
import { DataContext } from "../context/DataContext";
import { useTranslation } from "react-i18next";
import { NoData } from "../components/NoData";

const { width, height } = Dimensions.get("window");
const DATA = [
  {
    key: 1,
    title: "ወ/ሮ  የዚዳ ጀበል በ አድማስ ድጂታል ሎተሪ 5ኛ ዕጣ 160 ሺህ ብር አሸናፊ",
    img: require("../../assets/images/news-img.png"),
  },
  {
    key: 2,
    title: "ወ/ሮ  የዚዳ ጀበል በ አድማስ ድጂታል ሎተሪ 5ኛ ዕጣ 160 ሺህ ብር አሸናፊ",
    img: require("../../assets/images/news-img.png"),
  },
  {
    key: 3,
    title: "ወ/ሮ  የዚዳ ጀበል በ አድማስ ድጂታል ሎተሪ 5ኛ ዕጣ 160 ሺህ ብር አሸናፊ",
    img: require("../../assets/images/news-img.png"),
  },
];

export const Home = ({ navigation }) => {
  const flatListRef = useRef<FlatList>(null);
  const { reload, loadingLotteries, news } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loadingLotteries} onRefresh={reload} />
      }
    >
      {news.length ? (
        <Animated.FlatList
          ref={flatListRef}
          pagingEnabled
          scrollEventThrottle={32}
          style={{ width }}
          data={news}
          keyExtractor={(item: any) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderItem({ item, navigation })}
        />
      ) : (
        <NoData message={t("no_news_to_view")} />
      )}
      <Cards navigation={navigation} />
      <TouchableOpacity onPress={() => {}}>
        <CText
          style={{ padding: 10, fontWeight: "bold" }}
          content={t("choose_lottery_type")}
        />
      </TouchableOpacity>
      <Lotteries navigation={navigation} />
    </ScrollView>
  );
};

const renderItem = ({ item, navigation }: any) => {
  return (
    <View
      key={item.id}
      style={{
        width,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
      }}
    >
      <View style={{ borderRadius: 10, overflow: "hidden", elevation: 5 }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: width - 20, height: 200 }}
        />

        <Gradient
          style={{
            position: "absolute",
            bottom: 0,
            width,
            height: "35%",
            justifyContent: "center",
          }}
          gradColors={[colors.lightPrimary, colors.primary]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(routes.news_details, { news: item })
            }
            activeOpacity={0.7}
          >
            <CText
              style={{
                color: colors.white,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                width: "90%",
              }}
              content={item.title}
            />
          </TouchableOpacity>
        </Gradient>
      </View>
    </View>
  );
};
