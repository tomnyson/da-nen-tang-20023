import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "green",
    padding: 15,
    marginTop: 30,
  },
  txtRed: {
    color: "red",
  },
  containerProduct: {
    padding: 5,
  },
});

export const textStyle = StyleSheet.create({
  upperCase: {
    textTransform: "uppercase",
  },
  lowerCase: {
    textTransform: "lowercase",
  },
});

export const styleRedText = StyleSheet.compose(
  styles.txtRed,
  textStyle.upperCase
);
