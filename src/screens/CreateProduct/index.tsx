import { StyleSheet, View } from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";

export function CreateProduct() {
  return (
    <View>
      <HeaderReturn title="Cadastro de produtos" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
