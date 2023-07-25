import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import LogoImg from "../../assets/ofairta.png";

interface RequestResponseProps {
  id: string;
  total_value: number;
  buyer: {
    name: string;
  };
  status: string;
}

export function Orders() {
  const [request, setRequest] = useState<RequestResponseProps[]>([]);
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  useEffect(() => {
    setLoading(true);
    api.get("/get-all-sale-by-owner").then((response) => {
      setRequest(response.data);
      setLoading(false);
    });
  }, []);

  console.log(request);

  return (
    <View>
      <HeaderReturn title="Meus Pedidos" />
      {loading && (
        <ActivityIndicator style={styles.loading} size={50} color="#019972" />
      )}
      <View style={styles.container}>
        {!loading && (
          <ScrollView>
            {request.map((req) => (
              <Pressable
                onPress={() => navigate("DetailsOrders", { id: req.id })}
                key={req.id}
                style={[
                  styles.RequestCard,
                  req.status === "OPEN"
                    ? {
                        backgroundColor: "#FFF1DC",
                        borderColor: "#d46b71",
                      }
                    : { backgroundColor: "#DFEDE9" },
                ]}
              >
                <Image source={LogoImg} style={styles.RequestImage} />
                <View style={styles.RequestContent}>
                  <Text style={styles.RequestTitle}>
                    Pedido do {req.buyer.name}
                  </Text>
                  {/* <Text style={styles.RequestAbout}>
                    R$ {req.total_value.toFixed(2)}
                  </Text> */}
                  <Text style={styles.RequestAbout}>
                    {req.status === "OPEN"
                      ? "AGUARDANDO APROVAÇÃO"
                      : "FINALIZADO"}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  myRequestContainer: {
    padding: 40,
  },
  loading: {
    alignContent: "center",
    marginTop: 50,
  },
  RequestCard: {
    padding: 10,
    paddingHorizontal: 10,
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "stretch",
    borderWidth: 1,
    borderColor: "#019972",
  },
  RequestImage: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  RequestContent: {
    marginLeft: 10,
  },
  RequestTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#343F4B",
  },
  RequestAbout: {
    fontWeight: "500",
    fontSize: 14,
    color: "#343F4B",
  },
});
