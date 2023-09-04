import { PencilLine, XCircle } from "phosphor-react-native";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";

import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useTabContext } from "../../contexts/TabContext";
import { useNavigation } from "@react-navigation/native";
import { refresh } from "@react-native-community/netinfo";

interface ProductsResponse {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export function Home() {
  const { userName } = useAuth();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductsResponse[]>([]);
  const { idBank } = useTabContext();

  const { navigate } = useNavigation();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get<ProductsResponse[]>(`/get-all-product/store/${idBank}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      });
  }, [idBank, refresh]);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#DFEDE9",
      }}
    >
      <HeaderReturn title={`Olá, ${userName}`} />
      <ScrollView>
        <View
          style={{
            paddingTop: 40,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "#075E55",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Meus produtos
            </Text>
            <TouchableOpacity onPress={() => navigate("CreateProduct")}>
              <Text
                style={{
                  color: "#075E55",
                  fontWeight: "500",
                  fontSize: 16,
                }}
              >
                Add mais produtos
              </Text>
            </TouchableOpacity>
          </View>

          {loading && (
            <ActivityIndicator
              style={{ paddingTop: 50 }}
              size={50}
              color="#019972"
            />
          )}

          {!loading && (
            <View style={{ alignItems: "center", paddingTop: 20 }}>
              {products?.map((product) => (
                <View key={product.id} style={styles.cartProduct}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.cartProductImage}
                  />
                  <View style={styles.cartProductTextInfo}>
                    <Text style={styles.cartProductText}>{product.name}</Text>
                    <Text style={styles.cartProductText}>
                      R$ {product.price}
                    </Text>
                  </View>

                  <View style={styles.cartProductButtons}>
                    <Text style={styles.cartProductButtonsText}>
                      QTD: {product.quantity}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigate("UpdateProduct", {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        quantity: product.quantity,
                      })
                    }
                  >
                    <PencilLine color="#075E55" size={25} weight="fill" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <XCircle color="#d46b71" size={25} weight="fill" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => setRefresh(!refresh)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  cartProduct: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#019972",
    borderRadius: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "95%",
    elevation: 5,
  },
  cartProductImage: {
    width: 50,
    height: 50,
    borderRadius: 3,
  },
  cartProductTextInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cartProductText: {
    color: "#075E55",
  },
  cartProductButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartProductButtonsText: {
    padding: 10,
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

  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});
