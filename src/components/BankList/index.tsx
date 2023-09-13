import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "../../screens/MyBanks";
import LogoImg from "../../assets/ofairta.png";

export const BankList = ({ banking, handleSelectedBank, navigate }) => {
  return (
    <View style={styles.cardContainer}>
      {banking.map((bank) => (
        <TouchableOpacity
          onPress={() => {
            handleSelectedBank(bank.id);
            navigate("Home");
          }}
          key={bank.id}
          style={styles.cardBanking}
        >
          <Image style={styles.cardBankingImg} source={LogoImg} />
          <Text style={styles.cardBankingTitle}>{bank.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
