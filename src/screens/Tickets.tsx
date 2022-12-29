import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import CText from "../components/CText";
import colors from "../constants/colors";
import Gradient from "../components/Gradient";
import routes from "../navigations/routes";
import { CButton } from "../components/CButton";
import { LottoNumberBox } from "../components/LottoNumberBox";
import { DataContext } from "../context/DataContext";
import { DataContextTypes, ILottery, IWinningNumbers } from "../utils/types";
import { Loading } from "../components/Loading";
import DropDown from "../components/DropDown";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import formatNumber from "../utils/functions";

const { width, height } = Dimensions.get("window");

export default function Tickets({ navigation, route }) {
  const { lotteries, winningNumbersList } =
    useContext<DataContextTypes>(DataContext);
  const [currentLotteryId, setCurrentLotteryId] = useState("");
  const lotteryId = route.params?.lotteryId;

  const [selected, setSelected] = useState<ILottery>();
  const { t } = useTranslation();
  const filter = () => {
    setSelected(lotteries.filter((i) => i.id === currentLotteryId)[0]);
  };

  useEffect(() => {
    filter();
    if (!lotteryId) {
      setCurrentLotteryId(lotteries[0]?.id);
    } else {
      setCurrentLotteryId(lotteryId);
    }

    return () => {};
  }, [currentLotteryId]);

  if (!lotteries) return <Loading />;

  return (
    <View style={{ flex: 1 }}>
      <Gradient
        style={{
          padding: 15,
          backgroundColor: colors.primary,
          paddingBottom: 2,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          elevation: 5,
          zIndex: 100,
        }}
      >
        <CText
          content={t("choose_lottery_type")}
          style={{ fontWeight: "bold", color: colors.white, margin: 5 }}
        />
        <DropDown
          data={lotteries.filter((i) => {
            return new Date(i?.drawDate) < new Date();
          })}
          selected={selected}
          setSelected={setSelected}
        />
        <View
          style={{
            backgroundColor: colors.lightBlue,
            width: "auto",
            height: 50,
            marginTop: 50,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {[
            { key: 1, title: t("end_number") },
            { key: 2, title: t("all_or_ending_number") },
            { key: 3, title: t("prize") },
          ].map((i) => {
            return (
              <TouchableOpacity
                key={i.key}
                style={{
                  borderRadius: 2,
                  width: width / 3.29,
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.white,
                }}
              >
                <CText
                  content={i.title}
                  style={{
                    color: colors.primary,
                    fontWeight: "bold",
                    margin: 5,
                    fontSize: 12,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </Gradient>
      <ScrollView contentContainerStyle={{}}>
        {winningNumbersList
          .filter((wn: IWinningNumbers) => {
            return wn.lotteryId === selected?.id;
          })
          .map((i: IWinningNumbers) => {
            return <Ticket key={i.id} ticket={i} />;
          })}
      </ScrollView>
    </View>
  );
}

const Ticket = ({ ticket }: { ticket: IWinningNumbers }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.white,
        elevation: 3,
      }}
    >
      <View
        style={{
          backgroundColor: colors.primary,
          width: width / 7.5,
          minHeight: width / 7.5,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
          borderRadius: 5,
        }}
      >
        <CText
          content={ticket.endNumber}
          style={{ color: colors.white, fontWeight: "bold", fontSize: 30 }}
        />
      </View>

      <View style={{ flex: 1 }}>
        {Object.keys(ticket.numbers).map((num) => {
          const obj = ticket?.numbers[num];
          const number = ticket?.numbers[num].number?.toString();
          let prize = ticket?.numbers[num].prize?.toString();
          prize = formatNumber(prize);
          return (
            <View
              key={number}
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 5,
                borderBottomColor: colors.lightBlue,
                borderBottomWidth: 0.5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 3,
                }}
              >
                {number.split("").map((i) => {
                  return (
                    <CText
                      key={Math.random()}
                      content={i.toString()}
                      style={{
                        color: colors.white,
                        backgroundColor: colors.primary,
                        marginHorizontal: 2,
                        padding: 2,
                        borderRadius: 5,
                        textAlign: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    />
                  );
                })}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  marginRight: 5,
                  justifyContent: "center",
                }}
              >
                <CText
                  style={{ fontSize: 15, marginRight: 3 }}
                  content={t("birr")}
                />
                <CText
                  style={{ fontWeight: "bold", fontSize: 15 }}
                  content={prize}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
