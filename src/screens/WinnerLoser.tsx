import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CText from "../components/CText";
import colors from "../constants/colors";
import Gradient from "../components/Gradient";
import { CButton } from "../components/CButton";
import Lottie from "lottie-react-native";
import { LottoNumberBox } from "../components/LottoNumberBox";
import formatNumber from "../utils/functions";
import routes from "../navigations/routes";
import { t } from "i18next";

const { width, height } = Dimensions.get("window");

const WinnerLoser = ({ route, navigation }) => {
  return (
    <Gradient style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.5 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View>
          <Image
            style={{ width: width * 0.9, height: 250 }}
            resizeMode="contain"
            source={
              route.params.possibleWinList.length
                ? require(`../../assets/images/winner.png`)
                : require(`../../assets/images/loser.png`)
            }
          />
          <View
            style={{ position: "absolute", bottom: 40, alignSelf: "center" }}
          >
            {route.params.possibleWinList.length ? (
              <>
                <CText
                  style={{
                    color: colors.primary,
                    fontWeight: "bold",
                    fontSize: 28,
                  }}
                  content={
                    formatNumber(route.params.possibleWinList[0]?.prize) +
                    ` ${t("birr")}`
                  }
                />
                <CText
                  style={{
                    color: "#543308",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                  content={t("won")}
                />
              </>
            ) : null}
          </View>
        </View>
        {route.params.possibleWinList.length ? (
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

        <TouchableOpacity>
          <CText
            content={
              route.params.possibleWinList.length
                ? t("congrats")
                : t("try_again")
            }
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
          {route.params.lottoNumber.split("").map((i) => {
            return (
              <LottoNumberBox key={Math.random()} content={i.toString()} />
            );
          })}
        </View>
      </View>
      <View>
        <CButton
          onPress={() => {
            navigation.navigate(routes.contact_us);
          }}
          title={t("more_info")}
          style={{ marginBottom: 15, backgroundColor: colors.white }}
          textStyle={{ color: colors.black }}
        />
        <CButton
          onPress={() => {
            navigation.navigate(routes.tickets);
          }}
          title={t("winning_numbers")}
          style={{}}
        />
      </View>
    </Gradient>
  );
};

export default WinnerLoser;
