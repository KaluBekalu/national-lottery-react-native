import AnimatedLottieView from "lottie-react-native";
import { View } from "react-native";

export const Loading = ({ size = 60 }: { size?: number }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <AnimatedLottieView
        style={{ width: size }}
        autoPlay
        source={require("../../assets/spin.json")}
        loop
      />
    </View>
  );
};
