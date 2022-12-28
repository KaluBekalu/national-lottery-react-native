import { LinearGradient } from "expo-linear-gradient";
import { useContext, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CText from "../components/CText";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Gradient from "../components/Gradient";
import { DataContext } from "../context/DataContext";
import routes from "../navigations/routes";

const { width, height } = Dimensions.get("window");

export default function Regulations({ navigation }) {
  const flatListRef = useRef<FlatList>(null);
  const { regulations } = useContext(DataContext);

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.news_details, { news: item })}
        key={item.key}
        style={{
          backgroundColor: colors.white,
          margin: 5,
          borderRadius: 5,
          elevation: 5,
          padding: 15,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <View style={{ paddingVertical: 10, width: "100%" }}>
          <CText style={{ fontWeight: "bold" }} content={item.title} />
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
              content={new Date(item.createdAt).toDateString()}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  console.log(regulations);
  return (
    <View>
      <Animated.FlatList
        ref={flatListRef}
        scrollEventThrottle={32}
        style={{ width }}
        data={regulations}
        keyExtractor={(item: any) => item.key}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}
