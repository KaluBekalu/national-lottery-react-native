import React, { useContext, useEffect, useState } from "react";
import { Dimensions, TextInput, View } from "react-native";
import CText from "../components/CText";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../constants/colors";
import Gradient from "../components/Gradient";
import routes from "../navigations/routes";
import { CButton } from "../components/CButton";
import { LottoNumberBox } from "../components/LottoNumberBox";
import DropDown from "../components/DropDown";
import { DataContext } from "../context/DataContext";
import { DataContextTypes, ILottery } from "../utils/types";
import { useTranslation } from "react-i18next";

const { width, height } = Dimensions.get("window");

export default function CheckLotto({ navigation, route }) {
  const [lottoNumber, setLottoNumber] = useState("");
  const { lotteries, winningNumbersList } =
    useContext<DataContextTypes>(DataContext);
  const [selected, setSelected] = useState<ILottery>();

  const { t } = useTranslation();

  const filter = (ltId) => {
    setSelected(lotteries.filter((i) => i.id === ltId)[0]);
  };

  const checkNumber = () => {
    if (lottoNumber.length != 7) return;

    const lotteryNumbers = winningNumbersList
      .filter((i) => i.lotteryId == selected.id)
      .map((i) => i.numbers)[0];
    const possibleWinList = lotteryNumbers.filter((i) => {
      if (lottoNumber.endsWith(i.number.toString())) {
        return i;
      }
    });

    navigation.navigate(routes.winner_loser, {
      lotteryId: selected.id,
      lottoNumber,
      possibleWinList,
    });
  };

  useEffect(() => {
    filter(route.params?.lotteryId || lotteries[0].id);
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Gradient
        style={{
          padding: 15,
          backgroundColor: colors.primary,
          paddingBottom: 40,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          elevation: 5,
        }}
      >
        <CText
          content={t("choose_lottery_type")}
          style={{ fontWeight: "bold", color: colors.white, margin: 5 }}
        />
        <DropDown
          data={lotteries}
          selected={selected}
          setSelected={setSelected}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
            width: width / 1.1,
          }}
        >
          <Icon
            name="calendar"
            style={{ marginRight: 10, color: colors.white }}
            size={25}
          />
          <CText
            content={t("officially_released")}
            style={{ color: colors.white }}
          />
        </View>
        <CText
          content={t("enter_the_lot_number")}
          style={{ fontWeight: "bold", color: colors.white, margin: 5 }}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TextInput
            caretHidden={true}
            style={{
              width,
              padding: 15,
              position: "absolute",
              zIndex: 10,
              color: colors.transparent,
            }}
            value={lottoNumber}
            keyboardType="number-pad"
            onChangeText={(val) => {
              if (lottoNumber.length >= 7)
                return setLottoNumber(val.substring(0, 7));
              setLottoNumber(val);
            }}
          />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => {
            return (
              <LottoNumberBox
                key={i}
                content={lottoNumber && lottoNumber[i] ? lottoNumber[i] : "*"}
              />
            );
          })}
        </View>

        <CButton
          onPress={() => checkNumber()}
          title={t("check_lot_number")}
          style={{
            position: "absolute",
          }}
        />
      </Gradient>
    </View>
  );
}
