import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { HeaderReturn } from "../../components/HeaderReturn";
const { width } = Dimensions.get("window");

import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import LogoImg from "../../assets/ofairta.png";
import { useTabContext } from "../../contexts/TabContext";
import { api } from "../../services/api";

interface BankingResponse {
  id: string;
  name: string;
}

export function MyBanks() {
  const [loading, setLoading] = useState(false);
  const [banking, setBanking] = useState<BankingResponse[]>([]);
  const { setShowTab, setIdBank } = useTabContext();

  const { navigate } = useNavigation();

  useEffect(() => {
    setLoading(true);
    api.get<BankingResponse[]>("/stores").then((response) => {
      setBanking(response.data);
      setLoading(false);
    });
  }, []);

  async function handlerSelectedBank(id: string) {
    setIdBank(id);
    navigate("Home");
    setShowTab(true);
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#E5E5E5",
      }}
    >
      <HeaderReturn title="Minhas Bancas" />
      <View style={styles.listHomeProduct}>
        {loading && <ActivityIndicator size="large" color="#019972" />}
        {banking.map((bank) => (
          <TouchableOpacity
            onPress={() => handlerSelectedBank(bank.id)}
            key={bank.id}
            style={styles.cardBanking}
          >
            <Image style={styles.cardBankingImg} source={LogoImg} />
            <Text style={styles.cardBankingTitle}>{bank.name}</Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: "#ccc",
    width: width / 2 - 20,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#075E55",
  },
  cardBankingImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardBankingTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#075E55",
  },
});
