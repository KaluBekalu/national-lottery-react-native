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

const { width, height } = Dimensions.get("window");
const DATA = [
  {
    key: 1,
    title: "የእንቁጣጣሽ ሎተሪ 1ኛ ዕጣ አሸናፊ",
    img: require("../../assets/images/testimonial-news-image.png"),
    date: new Date().toDateString(),
  },
  {
    key: 2,
    title: "ወ/ሮ  የዚዳ ጀበል በ አድማስ ድጂታል ሎተሪ 5ኛ ዕጣ 160 ሺህ ብር አሸናፊ",
    img: require("../../assets/images/news-img.png"),
    date: new Date().toDateString(),
  },
  {
    key: 3,
    title: "የእንቁጣጣሽ ሎተሪ 1ኛ ዕጣ አሸናፊ",
    img: require("../../assets/images/lottery-numbers.png"),
    date: new Date().toDateString(),
  },
  {
    key: 4,
    title: "የእንቁጣጣሽ ሎተሪ 1ኛ ዕጣ አሸናፊ",
    img: require("../../assets/images/testimonial-news-image.png"),
    date: new Date().toDateString(),
  },
  {
    key: 5,
    title: "የእንቁጣጣሽ ሎተሪ 1ኛ ዕጣ አሸናፊ",
    img: require("../../assets/images/testimonial-news-image.png"),
    date: new Date().toDateString(),
  },
  {
    key: 6,
    title: "የእንቁጣጣሽ ሎተሪ 1ኛ ዕጣ አሸናፊ",
    img: require("../../assets/images/testimonial-news-image.png"),
    date: new Date().toDateString(),
  },
];

export default function Testimonials() {
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: any) => {
    return (
      <View
        key={item.key}
        style={{
          backgroundColor: colors.white,
          margin: 5,
          borderRadius: 5,
          elevation: 5,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          source={item.img}
          style={{
            width: "100%",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
        <View style={{ paddingVertical: 15, width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Icon name="clock" size={15} color={colors.grey} />
            <CText
              style={{
                marginLeft: 5,
                color: colors.grey,
                fontSize: 15,
              }}
              content={item.date}
            />
          </View>
          <CText style={{ fontWeight: "bold" }} content={item.title} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Animated.FlatList
        ref={flatListRef}
        scrollEventThrottle={32}
        style={{ width }}
        data={DATA}
        keyExtractor={(item: any) => item.key}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}
