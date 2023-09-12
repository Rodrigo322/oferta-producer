import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTabContext } from "../../contexts/TabContext";
import { api } from "../../services/api";
import { HeaderReturn } from "../../components/HeaderReturn";
import LogoImg from "../../assets/ofairta.png";

const { width } = Dimensions.get("window");

const COLORS = {
  primary: "#019972",
  background: "#E5E5E5",
  cardBackground: "#ccc",
  cardBorder: "#075E55",
  cardText: "#075E55",
};

export const MyBanks = () => {
  const [loading, setLoading] = useState(false);
  const [banking, setBanking] = useState([]);
  const { setShowTab, setIdBank } = useTabContext();
  const { navigate } = useNavigation();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/get-all-store-by-owner").then((response) => {
      setBanking(response.data);
      setLoading(false);
    });
  }, [refresh]);

  const handleSelectedBank = (id) => {
    setIdBank(id);
    navigate("Home");
    setShowTab(true);
  };

  return (
    <View style={styles.container}>
      <HeaderReturn title="Minhas Bancas" />
      <TouchableOpacity
        onPress={() => setRefresh(!refresh)}
        style={styles.refreshButton}
      >
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <View style={styles.cardContainer}>
          {banking.length === 0 ? (
            <Text style={styles.textEmpty}>Nenhuma bancada encontrada</Text>
          ) : (
            banking.map((bank) => (
              <TouchableOpacity
                onPress={() => handleSelectedBank(bank.id)}
                key={bank.id}
                style={styles.cardBanking}
              >
                <Image style={styles.cardBankingImg} source={LogoImg} />
                <Text style={styles.cardBankingTitle}>{bank.name}</Text>
              </TouchableOpacity>
            ))
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  refreshButton: {
    height: 60,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  cardContainer: {
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
    backgroundColor: COLORS.cardBackground,
    width: width / 2 - 20,
    elevation: 5,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  cardBankingImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardBankingTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: COLORS.cardText,
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    bottom: 0,
    position: "absolute",
  },
  textEmpty: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
    color: COLORS.cardText,
  },
});
