import { LinearGradient } from "expo-linear-gradient";
import { useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CText from "../components/CText";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Gradient from "../components/Gradient";
import routes from "../navigations/routes";

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

  const renderItem = ({ item }: any) => {
    return (
      <View
        key={item.key}
        style={{
          width,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
      >
        <View style={{ borderRadius: 10, overflow: "hidden", elevation: 5 }}>
          <Image source={item.img} style={{ width: width - 20 }} />

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
              onPress={() => navigation.navigate(routes.news_details)}
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
                content="ወ/ሮ  የዚዳ ጀበል በ አድማስ ድጂታል ሎተሪ 5ኛ ዕጣ 160 ሺህ ብር አሸናፊ"
              />
            </TouchableOpacity>
          </Gradient>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <Animated.FlatList
        ref={flatListRef}
        pagingEnabled
        scrollEventThrottle={32}
        style={{ width }}
        data={DATA}
        keyExtractor={(item: any) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />

      <Cards />
      <Lotteries />
    </ScrollView>
  );
};

const Cards = () => {
  const flatListRef = useRef<FlatList>(null);

  const cardData = [
    {
      key: 0,
      title: "6ተኛ ዙር የአድማስ ሎተሪ",
      month: "መስከረም",
      date: "25",
    },
    {
      key: 1,
      title: "6ተኛ ዙር የአድማስ ሎተሪ",
      month: "መስከረም",
      date: "25",
    },
    {
      key: 2,
      title: "6ተኛ ዙር የአድማስ ሎተሪ",
      month: "መስከረም",
      date: "25",
    },
  ];

  const renderItem = ({ item }: any) => {
    return (
      <Gradient
        style={{
          elevation: 5,
          width: "auto",
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
            content={item.title}
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
              content={item.month}
              style={{
                color: colors.white,
                backgroundColor: colors.lightPrimary,
                textAlign: "center",
                paddingHorizontal: 5,
              }}
            />
            <CText
              content={item.date}
              style={{
                color: colors.primary,
                fontSize: width * 0.06,
                fontWeight: "bold",
                alignSelf: "center",
                marginHorizontal: width * 0.04,
              }}
            />
            <CText
              content={"ይወጣል"}
              style={{
                color: colors.primary,
                textAlign: "center",
                // fontWeight: "bold",
                marginBottom: 10,
              }}
            />
          </View>
        </TouchableOpacity>
      </Gradient>
    );
  };

  return (
    <View style={{}}>
      <Animated.FlatList
        ref={flatListRef}
        scrollEventThrottle={32}
        style={{ width }}
        data={cardData}
        keyExtractor={(item: any) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
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
            title: "አሸናፊ ቁጥሮች",
            img: require("../../assets/icons/i-balls.png"),
          },
          {
            key: 2,
            title: "ዜና እና መረጃዎች",
            img: require("../../assets/icons/i-news.png"),
          },
        ].map((i) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
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

const Lotteries = () => {
  return (
    <View>
      {[
        {
          key: 0,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 1,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 2,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 3,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 4,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 5,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
      ].map((i) => {
        return <LotteryCard key={i.key} item={i} />;
      })}
    </View>
  );
};

const LotteryCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        marginVertical: 3,
        backgroundColor: colors.white,
        marginHorizontal: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: colors.primary,
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 10,
          }}
        />
        <View>
          <CText content={item.title} />
          <CText
            content={item.status}
            style={{ fontSize: 12, color: colors.grey }}
          />
        </View>
      </View>
      <Icon name="arrow-right" size={30} color={colors.primary} />
    </TouchableOpacity>
  );
};
