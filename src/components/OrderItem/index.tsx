import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LogoImg from "../../assets/ofairta.png";

export const OrderItem = ({ order, onPress }) => {
  const moeda = order.total_value;
  var formatoMoeda = moeda.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Pressable
      onPress={onPress}
      key={order.id}
      style={[
        styles.requestCard,
        order.status === "OPEN"
          ? {
              backgroundColor: "#FFF1DC",
              borderColor: "#d46b71",
              borderLeftColor: "#d46b71",
              borderLeftWidth: 10,
            }
          : {
              backgroundColor: "#fff",
              borderLeftWidth: 10,
            },
      ]}
    >
      <Image source={LogoImg} style={styles.requestImage} />
      <View style={styles.requestContent}>
        <Text style={styles.requestTitle}>Pedido do {order.buyer.name}</Text>
        <Text style={styles.requestAbout}>{formatoMoeda}</Text>
        <Text style={styles.requestAbout}>
          {order.status === "OPEN" ? "AGUARDANDO APROVAÇÃO" : "FINALIZADO"}
        </Text>
      </View>
    </Pressable>
  );
};

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
    borderRadius: 6,
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
