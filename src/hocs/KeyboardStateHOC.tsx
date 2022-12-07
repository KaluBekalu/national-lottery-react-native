import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

export const KeyboardStateHOC = (Component, navigation) => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return <Component navigation={navigation} keyboardStatus={keyboardStatus} />;
};
