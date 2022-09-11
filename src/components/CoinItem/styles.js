import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  ticker: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  Text: {
    color: "white",
    fontSize: 16,

    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  rankContainter: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default styles;
