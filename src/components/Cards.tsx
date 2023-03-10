import { useContext, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import CText from "./CText";
import colors from "../constants/colors";
import Gradient from "./Gradient";
import routes from "../navigations/routes";
import { DataContext } from "../context/DataContext";
import { months } from "../constants";
import { useTranslation } from "react-i18next";
import { NoData } from "./NoData";

const { width, height } = Dimensions.get("window");

export const Cards = ({ navigation }) => {
  const flatListRef = useRef<FlatList>(null);
  const { t } = useTranslation();
  const { lotteries } = useContext(DataContext);

  const renderItem = ({ item }: any) => {
    return (
      <Gradient
        style={{
          elevation: 5,
          width: "auto",
          minWidth: 300,
          margin: 10,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CText
            content={item?.name}
            style={{
              color: colors.white,
              fontSize: 20,
              fontWeight: "bold",
              maxWidth: 200,
              marginRight: 10,
            }}
          />
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <CText
              content={months[new Date(item?.drawDate).getMonth()]}
              style={{
                color: colors.white,
                backgroundColor: colors.lightPrimary,
                textAlign: "center",
                minWidth: 80,
                paddingHorizontal: 5,
              }}
            />
            <CText
              content={new Date(item?.drawDate).getDate().toString()}
              style={{
                color: colors.primary,
                fontSize: width * 0.06,
                fontWeight: "bold",
                alignSelf: "center",
                marginHorizontal: width * 0.04,
              }}
            />
            <CText
              content={
                Date.parse(item?.drawDate) > Date.now()
                  ? t("will_be_drawn")
                  : t("is_drawn")
              }
              style={{
                color: colors.primary,
                textAlign: "center",
                marginBottom: 10,
                marginHorizontal: 5,
              }}
            />
          </View>
        </TouchableOpacity>
      </Gradient>
    );
  };

  return (
    <View style={{}}>
      {lotteries.length ? (
        <Animated.FlatList
          ref={flatListRef}
          scrollEventThrottle={32}
          style={{ width }}
          data={lotteries}
          keyExtractor={(item: any) => item?.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      ) : (
        <NoData message={t("no_lottery_to_view")} />
      )}

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {[
          {
            key: 0,
            title: t("winning_numbers"),
            route: routes.check_lotto,
            onPress: () => navigation.navigate(routes.tickets),
            img: require("../../assets/icons/i-balls.png"),
          },
          {
            key: 2,
            title: t("news_and_informations"),
            route: routes.news,
            onPress: () => navigation.navigate(routes.news),
            img: require("../../assets/icons/i-news.png"),
          },
        ].map((i) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => i.onPress()}
              key={i.key}
              style={{
                backgroundColor: colors.white,
                elevation: 5,
                width: width / 2.2,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Image
                resizeMode="contain"
                source={i.img}
                style={{ width: 50, height: 50 }}
              />
              <CText
                content={i.title}
                style={{ color: colors.primary, marginTop: "auto" }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
