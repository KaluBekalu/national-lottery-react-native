import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

// HEADER LEFT
export default function HeaderLeft({ navigation, icon }) {
  return (
    <TouchableOpacity
      onPress={() =>
        icon == "back" ? navigation.goBack() : navigation.openDrawer()
      }
      style={{
        padding: 5,
        paddingHorizontal: 15,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon
        name={icon == "back" ? "arrow-left" : "menu"}
        size={25}
        color={colors.white}
      />
    </TouchableOpacity>
  );
}
