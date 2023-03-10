import { PencilLine, XCircle } from "phosphor-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";

import logoImg from "../../assets/ofairta.png";

export function Home() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#E5E5E5",
      }}
    >
      <HeaderReturn title={`Olá Rodrigo Lucas`} />

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
          <TouchableOpacity>
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

        <View style={{ alignItems: "center", paddingTop: 20 }}>
          <View style={styles.cartProduct}>
            <Image source={logoImg} style={styles.cartProductImage} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>batata</Text>
              <Text style={styles.cartProductText}>R$</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <Text style={styles.cartProductButtonsText}>QTD</Text>
            </View>
            <TouchableOpacity>
              <PencilLine color="#075E55" size={25} weight="fill" />
            </TouchableOpacity>
            <TouchableOpacity>
              <XCircle color="#d46b71" size={25} weight="fill" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    backgroundColor: "#ccc",
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
});
