import { useNavigation } from "@react-navigation/native";
import {
  Article,
  CaretRight,
  Door,
  Envelope,
  EnvelopeOpen,
  IdentificationBadge,
  LockKey,
  MapPin,
  Phone,
  Question,
  SignOut,
  WhatsappLogo,
  XSquare,
} from "phosphor-react-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { HeaderReturn } from "../../components/HeaderReturn";
import { ModalApp } from "../../components/Modal";
import { useAuth } from "../../contexts/AuthContext";
import { styles } from "./styles";

export function Settings() {
  const { logout, userName } = useAuth();
  const { navigate } = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalHelpVisible, setIsModalHelpVisible] = useState(false);
  const [isModalSignOutVisible, setIsModalSignOutVisible] = useState(false);

  function handleSignOut() {
    logout();
  }

  return (
    <View style={styles.container}>
      <HeaderReturn title="Configurações" />
      <Text style={styles.settingUserName}>Olá, {userName}</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "90%", marginBottom: 200 }}
      >
        <View style={styles.settingsContainerOptions}>
          <Text style={styles.settingOptionTitle}>Minha Conta</Text>
          <View style={{ alignItems: "center", gap: 10 }}>
            <Pressable
              style={[
                styles.settingContainerOptionsGroup,
                styles.settingContainerOptionsGroupFirst,
              ]}
              onPress={() => navigate("AddressProfile")}
            >
              <View style={styles.settingContainerOptionsIcon}>
                <MapPin color="#019972" size={32} weight="thin" />
                <Text style={styles.settingOptionsText}>
                  Endereço de entrega
                </Text>
              </View>
              <CaretRight color="#019972" size={32} weight="thin" />
            </Pressable>
            <Pressable
              style={styles.settingContainerOptionsGroup}
              onPress={() => navigate("Profile")}
            >
              <View style={styles.settingContainerOptionsIcon}>
                <IdentificationBadge color="#019972" size={32} weight="thin" />
                <Text style={styles.settingOptionsText}>Dados pessoais</Text>
              </View>
              <CaretRight color="#019972" size={32} weight="thin" />
            </Pressable>
            <Pressable
              style={styles.settingContainerOptionsGroup}
              onPress={() => navigate("ResetPassword")}
            >
              <View style={styles.settingContainerOptionsIcon}>
                <LockKey color="#019972" size={32} weight="thin" />
                <Text style={styles.settingOptionsText}>Alterar senha</Text>
              </View>
              <CaretRight color="#019972" size={32} weight="thin" />
            </Pressable>
            <Pressable
              style={styles.settingContainerOptionsGroup}
              onPress={() => navigate("DeactivateAccount")}
            >
              <View style={styles.settingContainerOptionsIcon}>
                <XSquare color="#019972" size={32} weight="thin" />
                <Text style={styles.settingOptionsText}>Desativar conta</Text>
              </View>
              <CaretRight color="#019972" size={32} weight="thin" />
            </Pressable>
          </View>
        </View>
        <Text
          style={[styles.settingOptionTitle, styles.settingOptionTitleSecond]}
        >
          Geral
        </Text>
        <View style={{ alignItems: "center", gap: 10, paddingBottom: 200 }}>
          <Pressable
            onPress={() => setIsModalVisible(true)}
            style={[
              styles.settingContainerOptionsGroup,
              styles.settingContainerOptionsGroupFirst,
            ]}
          >
            <View style={styles.settingContainerOptionsIcon}>
              <Article color="#019972" size={32} weight="thin" />
              <Text style={styles.settingOptionsText}>Sobre o OFairTa</Text>
            </View>
            <CaretRight color="#019972" size={32} weight="thin" />
          </Pressable>

          <Pressable
            onPress={() => setIsModalHelpVisible(!isModalHelpVisible)}
            style={styles.settingContainerOptionsGroup}
          >
            <View style={styles.settingContainerOptionsIcon}>
              <Question color="#019972" size={32} weight="thin" />
              <Text style={styles.settingOptionsText}>Preciso de ajuda?</Text>
            </View>
            <CaretRight color="#019972" size={32} weight="thin" />
          </Pressable>

          <Pressable
            onPress={() => setIsModalSignOutVisible(!isModalSignOutVisible)}
            style={styles.settingContainerOptionsGroup}
          >
            <View style={styles.settingContainerOptionsIcon}>
              <Door color="#d46b71" size={32} weight="thin" />
              <Text
                style={[
                  styles.settingOptionsText,
                  styles.settingOptionsTextEnd,
                ]}
              >
                Sair
              </Text>
            </View>
            <SignOut color="#d46b71" size={32} weight="thin" />
          </Pressable>
        </View>
      </ScrollView>

      <ModalApp
        title="Sobre o OFairTa"
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        backgroundColor="#DFEDE9"
      >
        <View
          style={{
            width: "100%",
            height: 400,
            padding: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#019972",
              fontWeight: "600",
              lineHeight: 28,
              textAlign: "justify",
              padding: 5,
            }}
          >
            O "OFairTa" tem por objetivo proporcionar facilidade na compra e
            venda de produtos oriundos dos pequenos produtores rurais da
            microrregião do Vão do Paranã. O aplicativo será disponibilizado na
            loja virtual de aplicativos Google Play Store de forma gratuita e
            será alimentado com dados de pequenos produtores da região alvo
            através de um banco de dados gerado pelo cadastro de produtores e
            produtos ofertados no próprio aplicativo.
          </Text>
        </View>
      </ModalApp>

      <ModalApp
        title="Entre em um dos nossos canais"
        isVisible={isModalHelpVisible}
        onClose={() => setIsModalHelpVisible(!isModalHelpVisible)}
        backgroundColor="#DFEDE9"
      >
        <View
          style={{
            gap: 15,
            padding: 20,
          }}
        >
          <Pressable
            style={{
              width: "100%",
              height: 80,
              backgroundColor: "#fff",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 25,
              gap: 10,
              borderRadius: 16,
              elevation: 3,
            }}
          >
            <WhatsappLogo color="#019972" size={50} weight="duotone" />
            <Text
              style={{
                color: "#019972",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Whatsapp
            </Text>
          </Pressable>

          <Pressable
            style={{
              width: "100%",
              height: 80,
              backgroundColor: "#fff",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 25,
              gap: 10,
              borderRadius: 16,
              elevation: 3,
            }}
          >
            <Envelope color="#019972" size={50} weight="duotone" />
            <Text
              style={{
                color: "#019972",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              E-mail
            </Text>
          </Pressable>

          <Pressable
            style={{
              width: "100%",
              height: 80,
              backgroundColor: "#fff",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 25,
              gap: 10,
              borderRadius: 16,
              elevation: 3,
            }}
          >
            <Phone color="#019972" size={50} weight="duotone" />
            <Text
              style={{
                color: "#019972",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Telefone
            </Text>
          </Pressable>

          <Pressable
            style={{
              width: "100%",
              height: 80,
              backgroundColor: "#fff",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 25,
              gap: 10,
              borderRadius: 16,
              elevation: 3,
            }}
          >
            <EnvelopeOpen color="#019972" size={50} weight="duotone" />
            <Text
              style={{
                color: "#019972",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Envie uma sugestão
            </Text>
          </Pressable>
        </View>
      </ModalApp>

      <ModalApp
        isVisible={isModalSignOutVisible}
        onClose={() => setIsModalSignOutVisible(false)}
        title="Deseja realmente sair?"
        backgroundColor="#DFEDE9"
      >
        <View
          style={{
            height: 200,
            alignItems: "center",
            justifyContent: "center",
            gap: 25,
          }}
        >
          <Pressable onPress={handleSignOut} style={styles.button}>
            <Text style={{ color: "#FFF" }}>Sim</Text>
          </Pressable>
          <Pressable
            onPress={() => setIsModalSignOutVisible(!isModalSignOutVisible)}
            style={{
              width: "40%",
              height: 45,
              backgroundColor: "#019972",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              elevation: 5,
            }}
          >
            <Text style={{ color: "#FFF" }}>Não</Text>
          </Pressable>
        </View>
      </ModalApp>
    </View>
  );
}
