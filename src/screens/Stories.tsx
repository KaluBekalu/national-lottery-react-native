import { LinearGradient } from "expo-linear-gradient";
import { useContext, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
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
import { NoData } from "../components/NoData";

const { width, height } = Dimensions.get("window");

export default function Stories({ navigation }) {
  const flatListRef = useRef<FlatList>(null);
  const { stories, loadingLotteries, reload } = useContext(DataContext);

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
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height: 250,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(routes.news_details, { news: item })
          }
          style={{ paddingVertical: 15, width: "100%" }}
        >
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
          <CText style={{ fontWeight: "bold" }} content={item.title} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {stories.length ? (
        <Animated.FlatList
          ref={flatListRef}
          scrollEventThrottle={32}
          style={{ width }}
          data={stories}
          refreshControl={
            <RefreshControl refreshing={loadingLotteries} onRefresh={reload} />
          }
          keyExtractor={(item: any) => item.key}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      ) : (
        <NoData />
      )}
    </View>
  );
}
