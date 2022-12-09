import * as React from "react";
import {
  StatusBar,
  TouchableOpacity,
  Animated,
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CText from "../components/CText";
import colors from "../constants/colors";
import routes from "../navigations/routes";
const { width, height } = Dimensions.get("screen");

const bgs = ["#fff", colors.lightPrimary, "#FF63ED", "#B98EFF"];

const DATA = [
  {
    key: "1",
    title: "ካሉበት ቦታ ሆነው የሎተሪ መውጫ ቀኖችን ይወቁ",
    image: require("../../assets/images/onboarding-image.png"),
  },
  {
    key: "2",
    title: "ከአስተዳደሩ የሚውጡ ዜናዎችን በመተግበሪያው ያግኙ",
    image: require("../../assets/images/onboarding-image.png"),
  },
  {
    key: "3",
    title: "ከአስተዳደሩ የሚውጡ ዜናዎችን በመተግበሪያው ያግኙ",
    image: require("../../assets/images/onboarding-image.png"),
  },
];

export default function Onboarding({ navigation }) {
  const scrollx = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef<FlatList>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    flatListRef?.current.scrollToIndex({
      index: current,
      animated: true,
    });
  }, [current]);

  const handleFinish = () => {
    return navigation.navigate(routes.drawer);
  };

  const renderItem = ({ item }: any) => {
    return (
      <View
        key={item.key}
        style={{
          height: width * 1.3,
          width,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width,
            height: width / 0.8,
            // position: "absolute",
            borderBottomLeftRadius: 90,
          }}
          source={item.image}
        />
        <View
          style={{
            width,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 20,
          }}
          // colors={[colors.transparent, colors.primary]}
          // start={{ x: 0.4, y: 0.5 }}
          // end={{ x: 1, y: 0.5 }}
        >
          <CText
            content={item.title}
            style={{
              fontSize: 30,
              textAlign: "center",
              color: colors.white,
              fontWeight: "bold",
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={require("../../assets/images/bg-image.png")}
      />
      <View style={styles.container}>
        <StatusBar hidden />

        <Animated.FlatList
          ref={flatListRef}
          pagingEnabled
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            { useNativeDriver: false }
          )}
          style={{ height: width * 1.3, width }}
          data={DATA}
          keyExtractor={(item: any) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />

        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Dots scrollx={scrollx} />

          <View
            style={{
              flexDirection: "row",
              width,
              justifyContent: "space-between",
              paddingHorizontal: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                handleFinish();
              }}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <CText
                content="ዝለል"
                style={{
                  color: colors.white,
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (current === DATA.length - 1) {
                  return handleFinish();
                }
                setCurrent((c) => c + 1);
              }}
              style={{
                backgroundColor: colors.white,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
                width: width / 5,
                height: width / 9,
              }}
            >
              <CText
                content="ቀጥል"
                style={{ fontSize: 17, fontWeight: "bold" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const Dots = ({ scrollx }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        padding: 30,
      }}
    >
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (1 + i) * width];
        const scale = scrollx.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollx.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.9],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={i}
            style={{
              width: 10,
              height: 10,
              backgroundColor: colors.white,
              borderRadius: 100,
              marginRight: 10,
              opacity: opacity,
              transform: [{ scale }],
            }}
          />
        );
      })}
    </View>
  );
};
