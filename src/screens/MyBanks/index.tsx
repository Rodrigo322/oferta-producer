import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { HeaderReturn } from "../../components/HeaderReturn";
const { width } = Dimensions.get("window");

import LogoImg from "../../assets/ofairta.png";

export function MyBanks() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1F222A",
      }}
    >
      <HeaderReturn title="Minhas Bancas" />
      <View style={styles.listHomeProduct}>
        <TouchableOpacity style={styles.cardBanking}>
          <Image style={styles.cardBankingImg} source={LogoImg} />
          <Text style={styles.cardBankingTitle}>Teste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  listHomeProduct: {
    marginLeft: 15,
    marginTop: 20,
    marginRight: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBanking: {
    borderRadius: 10,
    marginHorizontal: 2,
    marginBottom: 5,
    padding: 15,
    height: 200,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#181A20",
    width: width / 2 - 20,
    elevation: 5,
  },
  cardBankingImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardBankingTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#FFF",
  },
});
