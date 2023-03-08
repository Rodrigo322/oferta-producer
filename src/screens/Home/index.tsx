import { PencilLine, XCircle } from "phosphor-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";

export function Home() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1F222A",
      }}
    >
      <HeaderReturn title="Home" />

      <Text
        style={{
          color: "#FFF",
          paddingTop: 20,
          paddingHorizontal: 20,
          fontWeight: "700",
          fontSize: 18,
        }}
      >
        Olá Rodrigo Lucas
      </Text>

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
              color: "#FFF",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            Meus produtos
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "#FFF",
                fontSize: 16,
              }}
            >
              Add mais produtos
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", paddingTop: 20 }}>
          <View style={styles.cartProduct}>
            <Image style={styles.cartProductImage} />
            <View style={styles.cartProductTextInfo}>
              <Text style={styles.cartProductText}>batata</Text>
              <Text style={styles.cartProductText}>R$</Text>
            </View>

            <View style={styles.cartProductButtons}>
              <Text style={styles.cartProductButtonsText}>QTD</Text>
            </View>
            <TouchableOpacity>
              <PencilLine color="#019972" size={25} weight="fill" />
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
    backgroundColor: "#181A20",
    width: "95%",
    elevation: 5,
  },
  cartProductImage: {
    width: 50,
    height: 50,
  },
  cartProductTextInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cartProductText: {
    color: "#fff",
  },
  cartProductButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartProductButtonsText: {
    padding: 10,
    color: "#fff",
  },
});
