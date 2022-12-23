import { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import CText from "./CText";
import colors from "../constants/colors";
import customStyles from "../constants/styles";
import Icon from "react-native-vector-icons/AntDesign";

export const Dropdown = ({
  placeholder = "Select",
  data,
  onSelect,
  value = "",
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
        style={{
          ...customStyles.textInput,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <CText
          content={value ? value : placeholder}
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: value ? colors.primary : colors.grey,
          }}
        />
        <Icon name="caretdown" size={15} color={colors.primary} />
      </TouchableOpacity>
      {expanded ? (
        <ScrollView
          style={{
            backgroundColor: colors.white,
            position: "absolute",
            zIndex: 500,
            width: "100%",
            marginTop: 5,
            top: "100%",
            borderRadius: 5,
            elevation: 10,
            maxHeight: 180,
          }}
        >
          {data.map((i, index) => {
            return (
              <View
                key={i.key}
                style={{
                  backgroundColor: colors.white,
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  margin: 2,
                  borderColor: colors.primary,
                  borderBottomWidth: index == data.length - 1 ? 0 : 0.7,
                  alignItems: "flex-start",
                }}
              >
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    onSelect(i.value);
                    setExpanded(false);
                  }}
                >
                  <CText
                    key={i.key}
                    content={i.value}
                    style={{ fontSize: 15, color: colors.primary }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      ) : null}
    </View>
  );
};
