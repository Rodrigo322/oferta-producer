import { Envelope, Eye, EyeClosed, LockKey } from "phosphor-react-native";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import LogoImg from "../../assets/ofairta.png";
import { styles } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Image style={styles.logoImg} source={LogoImg} />
        <View style={styles.inputArea}>
          <View style={styles.inputGroup}>
            <Envelope color="#fff" size={32} weight="light" />
            <TextInput
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Digite seu e-mail"
            />
          </View>

          <View style={styles.inputGroup}>
            <LockKey color="#fff" size={32} weight="light" />
            <TextInput
              secureTextEntry={isPassword}
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="Digite sua password"
            />
            <Pressable onPress={() => setIsPassword(!isPassword)}>
              {isPassword && (
                <EyeClosed color="#fff" size={32} weight="light" />
              )}
              {!isPassword && <Eye color="#fff" size={32} weight="light" />}
            </Pressable>
          </View>

          <TouchableOpacity style={styles.buttonSignIn}>
            <Text style={styles.buttonSignInText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signMessage}>
          <Text style={styles.signMessageText}>
            Ainda não possui uma conta?
          </Text>
          <Text style={styles.signMessageTextBold}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
