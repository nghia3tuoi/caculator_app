import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      width: "100%",
      height: "30%",
    },
    resultText: {
      height: "100%",
      color: "#00b9d6",
      margin: 15,
      fontSize: 35,
      alignSelf: "flex-end",
    },
    historyText: {
      color: darkMode ? "#B5B7BB" : "#7C7C7C",
      fontSize: 20,
      marginRight: 10,
      alignSelf: "flex-end",
    },
    themeButton: {
      alignSelf: "flex-start",
      bottom: "-10%",
      margin: 15,
      backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      minHeight: "70%",
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button: {
      borderColor: darkMode ? "#3f4d5b" : "#e5e5e5",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "25%",
      height: "20%",
    },
    textButton: {
      color: darkMode ? "#b5b7bb" : "#7c7c7c",
      fontSize: 28,
    },
  });
  const buttons = [
    "C",
    "DEL",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  function calculator() {
    let lastArr = currentNumber[currentNumber.length - 1];
    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+" ||
      lastArr === "."
    ) {
      setCurrentNumber(currentNumber);
      return;
    } else {
      if (currentNumber.length > 0) {
        let result = eval(currentNumber).toString();
        setCurrentNumber(result);
        return;
      }
    }
  }
  function handleInput(buttonPressed: any) {
    if (
      buttonPressed === "+" ||
      buttonPressed === "-" ||
      buttonPressed === "*" ||
      buttonPressed === "/"
    ) {
      Vibration.vibrate(35);
      setCurrentNumber(currentNumber + buttonPressed);
      return;
    } else if (
      buttonPressed === 1 ||
      buttonPressed === 2 ||
      buttonPressed === 3 ||
      buttonPressed === 4 ||
      buttonPressed === 5 ||
      buttonPressed === 6 ||
      buttonPressed === 7 ||
      buttonPressed === 8 ||
      buttonPressed === 9 ||
      buttonPressed === 0 ||
      buttonPressed === "."
    ) {
      Vibration.vibrate(35);
    }
    switch (buttonPressed) {
      case "DEL":
        Vibration.vibrate(35);
        setLastNumber("");
        return;
      case "C":
        Vibration.vibrate(35);
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        Vibration.vibrate(35);
        setLastNumber(currentNumber + "=");
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }
  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity
          style={styles.themeButton}
          onPress={() => {
            darkMode ? setDarkMode(false) : setDarkMode(true);
          }}
        >
          <Entypo
            name={darkMode ? "light-up" : "moon"}
            size={24}
            color={darkMode ? "white" : "black"}
          />
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === "=" ||
          button === "/" ||
          button === "*" ||
          button === "-" ||
          button === "+" ? (
            <TouchableOpacity
              key={button}
              style={[styles.button, { backgroundColor: "#00b9d6" }]}
              onPress={() => handleInput(button)}
            >
              <Text
                style={[styles.textButton, { color: "white", fontSize: 28 }]}
              >
                {button}
              </Text>
            </TouchableOpacity>
          ) : button === "." || button === "DEL" ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    button === "."
                      ? darkMode
                        ? "#303946"
                        : "#fff"
                      : darkMode === true
                      ? "#414853"
                      : "#ededed",
                  minWidth: "37.5%",
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={[styles.textButton]}>{button}</Text>
            </TouchableOpacity>
          ) : button === "C" ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof button === "number"
                      ? darkMode
                        ? "#303946"
                        : "#fff"
                      : darkMode === true
                      ? "#414853"
                      : "#ededed",
                  minWidth: "37.5%",
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={[styles.textButton]}>{button}</Text>
            </TouchableOpacity>
          ) : button === 0 ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof button === "number"
                      ? darkMode
                        ? "#303946"
                        : "#fff"
                      : darkMode === true
                      ? "#414853"
                      : "#ededed",
                  minWidth: "37.5%",
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={[styles.textButton]}>{button}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof button === "number"
                      ? darkMode
                        ? "#303946"
                        : "#fff"
                      : darkMode === true
                      ? "#414853"
                      : "#ededed",
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={[styles.textButton]}>{button}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}
