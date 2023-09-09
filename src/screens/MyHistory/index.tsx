import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { HeaderReturn } from "../../components/HeaderReturn";
import { useState } from "react";

export function MyHistory() {
  const [text, setText] = useState("");
  const [height, setHeight] = useState(4);

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setHeight(Math.max(40, contentHeight));
  };

  return (
    <View style={styles.container}>
      <HeaderReturn title="Minha Historia" />
      <View style={styles.containerHistory}>
        <TextInput
          placeholderTextColor="#005047"
          style={[styles.input, { height }]}
          multiline={true}
          value={text}
          onChangeText={setText}
          onContentSizeChange={(e) =>
            onContentSizeChange(
              e.nativeEvent.contentSize.width,
              e.nativeEvent.contentSize.height
            )
          }
          textAlignVertical="top"
          placeholder="Digite sua historia"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFEDE9",
  },
  input: {
    color: "#005047",
    elevation: 3,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#019972",
    paddingVertical: 20,
  },
  containerHistory: {
    padding: 20,
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
