import React, { useState } from "react";
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

const { width, height } = Dimensions.get("window");

export default function Tickets({ navigation }) {
  const lottos = [
    {
      key: 1,
      value: "መደበኛ (Medebgna)",
    },
    {
      key: 2,
      value: "አድማስ ዲጅታል (Admase)",
    },
    {
      key: 3,
      value: "ትንሳኤ (Tensae)",
    },
    {
      key: 4,
      value: "ልዩ 1 (Liyu 1)",
    },
    {
      key: 5,
      value: "ልዩ 2 (Liyu 2)",
    },
    {
      key: 6,
      value: "ቶምቦላ (Tombola)",
    },
  ];

  const [selectedLotto, setSelectedLotto] = useState(lottos[0].value);
  const [lottoNumber, setLottoNumber] = useState("");

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
          content="የሎተሪውን አይነት ይምረጡ"
          style={{ fontWeight: "bold", color: colors.white, margin: 5 }}
        />
        <Dropdown
          data={lottos}
          onSelect={setSelectedLotto}
          value={selectedLotto}
          placeholder={selectedLotto}
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
      <ScrollView style={{}}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          return <Ticket key={i} />;
        })}
      </ScrollView>
    </View>
  );
}

const Ticket = () => {
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
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
          borderRadius: 10,
        }}
      >
        <CText
          content="1"
          style={{ color: colors.white, fontWeight: "bold", fontSize: 40 }}
        />
      </View>

      <View style={{ flex: 1 }}>
        {["123", "98187237", "866278"].map((num) => {
          return (
            <View
              key={num}
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
                {num.split("").map((i) => {
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
                }}
              >
                <CText style={{ fontSize: 15, marginRight: 3 }} content="ብር" />
                <CText
                  style={{ fontWeight: "bold", fontSize: 19 }}
                  content="12000"
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};