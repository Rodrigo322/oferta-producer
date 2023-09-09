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
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get<BankingResponse[]>("/get-all-store-by-owner").then((response) => {
      setBanking(response.data);
      setLoading(false);
    });
  }, [refresh]);

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

      <View>
        <TouchableOpacity
          onPress={() => setRefresh(!refresh)}
          style={styles.buttonRefresh}
        >
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator size="large" color="#019972" />}
      {!loading && (
        <View style={styles.listHomeProduct}>
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
          {banking.length === 0 && (
            <Text style={styles.textEmpty}>Nenhuma bancada encontrada</Text>
          )}
        </View>
      )}

      <TouchableOpacity
        onPress={() => navigate("CreateBanks")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Criar nova banca</Text>
      </TouchableOpacity>
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
    justifyContent: "flex-start",
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
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#019972",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    bottom: 0,
    position: "absolute",
  },
  buttonRefresh: {
    width: "100%",
    height: 60,
    backgroundColor: "#019972",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  textEmpty: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
    color: "#075E55",
  },
});
