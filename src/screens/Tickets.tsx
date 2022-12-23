import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import CText from "../components/CText";
import { Dropdown } from "../components/Dropdown";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../constants/colors";
import Gradient from "../components/Gradient";
import routes from "../navigations/routes";
import { CButton } from "../components/CButton";
import { LottoNumberBox } from "../components/LottoNumberBox";
import { DataContext } from "../context/DataContext";
import { DataContextTypes, IWinningNumbers } from "../utils/types";
import { Loading } from "../components/Loading";

const { width, height } = Dimensions.get("window");

export default function Tickets({ navigation, route }) {
  const { lotteries, winningNumbersList } =
    useContext<DataContextTypes>(DataContext);
  const [currentLotteryId, setCurrentLotteryId] = useState("");
  const { lotteryId } = route.params;

  const [lottoList, setLottoList] = useState([]);
  const [selectedLotto, setSelectedLotto] = useState(lottoList[0]);

  useEffect(() => {
    if (!lotteryId) {
      setCurrentLotteryId(lotteries[0]?.id);
    } else {
      setCurrentLotteryId(lotteryId);
    }
    if (lotteries) {
      let l: any = [];
      lotteries.map((i) => {
        l.push({ name: i.name, value: i.id });
      });
      setLottoList(l);
      setSelectedLotto(lottoList[0]);
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
          content="የሎተሪውን አይነት ይsምረጡ"
          style={{ fontWeight: "bold", color: colors.white, margin: 5 }}
        />
        <Dropdown
          data={lottoList}
          onSelect={(selectedLotto) => {
            setSelectedLotto(selectedLotto);
            setCurrentLotteryId(selectedLotto?.value);
          }}
          value={selectedLotto?.value}
          name={selectedLotto?.name}
          placeholder={selectedLotto?.name}
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
            { key: 1, title: "መጨረሻ ቁጥር" },
            { key: 2, title: "ሙሉ/መጨረሻ ቁ." },
            { key: 3, title: "ዕጣ ብር" },
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
                    fontSize: 15,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </Gradient>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {winningNumbersList
          .filter((wn: IWinningNumbers) => {
            return wn.lotteryId === currentLotteryId;
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
        elevation: 10,
      }}
    >
      <View
        style={{
          backgroundColor: colors.primary,
          width: width / 6,
          minHeight: width / 6,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
          borderRadius: 10,
        }}
      >
        <CText
          content={ticket.endNumber}
          style={{ color: colors.white, fontWeight: "bold", fontSize: 40 }}
        />
      </View>

      <View style={{ flex: 1 }}>
        {Object.keys(ticket.numbers).map((num) => {
          const obj = ticket?.numbers[num];
          const number = ticket?.numbers[num].number?.toString();
          const prize = ticket?.numbers[num].prize?.toString();
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
                        padding: 5,
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
                <CText style={{ fontSize: 18, marginRight: 3 }} content="ብር" />
                <CText
                  style={{ fontWeight: "bold", fontSize: 18 }}
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
