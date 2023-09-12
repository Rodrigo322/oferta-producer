import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { OrderItem } from "../../components/OrderItem";

interface RequestResponseProps {
  id: string;
  total_value: number;
  buyer: { name: string };
  status: string;
}

export function Orders() {
  const [orders, setOrders] = useState<RequestResponseProps[]>([]);
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();
  const [refresh, setRefresh] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await api.get("/get-all-sale-by-owner");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      Alert.alert("Error", "Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [refresh]);

  orders.sort((a, b) => {
    if (a.status === "OPEN" && b.status !== "OPEN") return -1;
    if (a.status !== "OPEN" && b.status === "OPEN") return 1;
    return 0;
  });

  return (
    <View style={styles.container}>
      <HeaderReturn title="Meus Pedidos" />
      {loading && (
        <ActivityIndicator style={styles.loading} size={50} color="#019972" />
      )}
      <View style={styles.content}>
        {!loading && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{ marginBottom: 20, paddingBottom: 90, width: "100%" }}
            >
              {orders.map((order) => (
                <OrderItem
                  key={order.id}
                  order={order}
                  onPress={() => navigate("DetailsOrders", { id: order.id })}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setRefresh(!refresh)}
      >
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFEDE9",
  },
  loading: {
    alignContent: "center",
    marginTop: 50,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    position: "relative",
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#343F4B",
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
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
