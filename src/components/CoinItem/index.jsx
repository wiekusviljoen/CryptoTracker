import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinItem = ({ marketCoin }) => {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 50,
          width: 50,
          marginRight: 10,
          alignSelf: "center",
        }}
      />

      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainter}>
            <Text style={styles.rank}>1</Text>
          </View>
          <Text style={styles.Text}>BTC</Text>
          <AntDesign
            name="caretdown"
            size={12}
            color="red"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.Text}>0.63%</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>56265.05</Text>
        <Text style={styles.Text}>Mcap 1.076 T</Text>
      </View>
    </View>
  );
};
export default CoinItem;
