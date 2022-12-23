import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CText from "../components/CText";
import colors from "../constants/colors";
import Gradient from "../components/Gradient";
import { CButton } from "../components/CButton";
import Lottie from "lottie-react-native";
import { LottoNumberBox } from "../components/LottoNumberBox";

const { width, height } = Dimensions.get("window");

const WinnerLoser = () => {
  const [winner, setWinner] = useState(true);

  return (
    <Gradient style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.5 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Image
          style={{ width: width * 0.9, height: 250 }}
          resizeMode="contain"
          source={
            winner
              ? require(`../../assets/images/winner.png`)
              : require(`../../assets/images/loser.png`)
          }
        />
        {winner ? (
          <>
            <Lottie
              style={{
                position: "absolute",
                transform: [
                  {
                    rotate: "45deg",
                  },
                ],
                height: 370,
              }}
              source={require("../../assets/congrats.json")}
              autoPlay
              loop={true}
            />
            <Lottie
              style={{
                position: "absolute",
                height: 370,
              }}
              source={require("../../assets/congrats.json")}
              autoPlay
              loop={true}
            />
          </>
        ) : null}

        <TouchableOpacity onPress={() => setWinner(!winner)}>
          <CText
            content={winner ? "እንኳን ደስ አልዎት" : "እባክዎ እደገና ይሞክሩ"}
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: colors.white,
              margin: 15,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: width * 0.9,
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((i) => {
            return <LottoNumberBox key={i} content={i.toString()} />;
          })}
        </View>
      </View>
      <View>
        <CButton
          onPress={() => {}}
          title={"ለበለጠ መረጃ"}
          style={{ marginBottom: 15, backgroundColor: colors.white }}
          textStyle={{ color: colors.black }}
        />
        <CButton onPress={() => {}} title={"አሸናፊ ቁጥሮችን ይመልከቱ"} style={{}} />
      </View>
    </Gradient>
  );
};

export default WinnerLoser;
