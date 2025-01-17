import { StyleSheet, Text } from "react-native";
import {
  useFonts,
  NanumGothic_400Regular,
} from "@expo-google-fonts/nanum-gothic";
export default function Title() {
  const [fontLoaded] = useFonts({ NanumGothic_400Regular });

  return <Text style={styles.text}>LinkBEEZ</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: "#08A87E",
    fontWeight: "bold",
  },
});
