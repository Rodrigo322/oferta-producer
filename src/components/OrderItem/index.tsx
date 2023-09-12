import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LogoImg from "../../assets/ofairta.png";

export const OrderItem = ({ order, onPress }) => (
  <Pressable
    onPress={onPress}
    key={order.id}
    style={[
      styles.requestCard,
      order.status === "OPEN"
        ? {
            backgroundColor: "#FFF1DC",
            borderColor: "#d46b71",
          }
        : { backgroundColor: "#fff" },
    ]}
  >
    <Image source={LogoImg} style={styles.requestImage} />
    <View style={styles.requestContent}>
      <Text style={styles.requestTitle}>Pedido do {order.buyer.name}</Text>
      <Text style={styles.requestAbout}>R$ {order.total_value.toFixed(2)}</Text>
      <Text style={styles.requestAbout}>
        {order.status === "OPEN" ? "AGUARDANDO APROVAÇÃO" : "FINALIZADO"}
      </Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 10,
    position: "relative",
  },
  loading: {
    alignContent: "center",
    marginTop: 50,
  },
  requestCard: {
    padding: 10,
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "stretch",
    borderWidth: 1,
    borderColor: "#019972",
  },
  requestImage: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  requestContent: {
    marginLeft: 10,
  },
  requestTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#343F4B",
  },
  requestAbout: {
    fontWeight: "500",
    fontSize: 14,
    color: "#343F4B",
  },
});
