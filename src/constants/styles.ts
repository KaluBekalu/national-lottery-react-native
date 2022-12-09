import {
  StyleSheet,
  TouchableOpacityProps,
  TextInputProps,
  TextProps,
  ViewProps,
  ViewStyle,
} from "react-native";
import colors from "./colors";

type styleTypes = {
  textInput: TextInputProps;
  mainHeader: TextProps;
  textButton: TextInputProps;
  h1: TextInputProps;
  h2: TextInputProps;
  h3: TextInputProps;
  container: ViewStyle;
  inputContainer: ViewStyle;
  inputLabel: TextInputProps;
  primaryButton: ViewStyle;
  arrowButtonr: TouchableOpacityProps;
  arrowButtonl: TouchableOpacityProps;
  primaryButtonText: TextInputProps;
};

const customStyles = StyleSheet.create<styleTypes>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textInput: {
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    borderColor: colors.borderColor,
    paddingHorizontal: 20,
    fontSize: 18,
    backgroundColor: "white",
  },
  mainHeader: {
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 30,
    marginVertical: 10,
  },
  h1: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 35,
    marginHorizontal: 10,
  },

  h2: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  h3: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: "500",
    fontSize: 18,
  },
  inputContainer: {
    padding: 5,
  },
  textButton: {
    padding: 15,
    color: colors.primary,
  },
  inputLabel: {
    color: colors.secondary,
    fontSize: 15,
    marginBottom: 5,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    padding: 10,
    width: "auto",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  primaryButtonText: {
    fontSize: 20,
    color: colors.white,
  },
  arrowButtonr: {
    backgroundColor: colors.white,
    elevation: 4,
    padding: 10,
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: "50%",
    zIndex: 10,
    margin: 5,
  },
  arrowButtonl: {
    margin: 5,
    backgroundColor: colors.white,
    elevation: 4,
    padding: 10,
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: "50%",
    zIndex: 10,
  },
});

export default customStyles;
