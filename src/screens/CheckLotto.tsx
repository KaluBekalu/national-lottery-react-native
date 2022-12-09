import React, { useState } from "react";
import { Dimensions, TextInput, TouchableOpacity, View } from "react-native";
import CText from "../components/CText";
import { Dropdown } from "../components/Dropdown";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

export default function CheckLotto() {
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
      <View
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
            content="መደበኛ በብሔራዊ ሎተሪ አስተዳደር ዕድል አዳራሽ ከምሽቱ 12፡00 ሰዓት ላይ ወጣ፡፡"
            style={{ color: colors.white }}
          />
        </View>
        <CText
          content="የእጣ ቁጥሮን ያስገቡ"
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
              <View
                key={i}
                style={{
                  backgroundColor: colors.white,
                  height: 60,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                }}
              >
                <CText
                  content={lottoNumber && lottoNumber[i] ? lottoNumber[i] : "*"}
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                />
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            backgroundColor: colors.lightBlue,
            padding: 10,
            alignItems: "center",
            position: "absolute",
            justifyContent: "center",
            width: width * 0.9,
            alignSelf: "center",
            bottom: -30,
            borderRadius: 5,
          }}
        >
          <CText
            content="ቁጥሮን ይፈትሹ"
            style={{ fontWeight: "bold", color: colors.white, margin: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
