import React, { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { LinearGradient } from "expo-linear-gradient";
import SmallButton from "../components/SmallButton";
import PostCard from "../components/PostCard";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const [posts, setPosts] = useState(0);
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#1DDFAB", "#023829"]}
      style={styles.linearGradient}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.header}>Profile</Text>
          <Icon
            onPress={() => {
              navigation.navigate("Settings");
            }}
            name="gear"
            size={36}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "rgba(255,255,255,0.9)",
            marginBottom: 30,
            marginTop: 10,
          }}
        ></View>

        <Text
          style={[
            styles.boldText,
            {
              fontSize: 30,
              fontWeight: "bold",
            },
          ]}
        >
          Last Name
        </Text>
        <Text
          style={[
            styles.regText,
            {
              fontSize: 26,
              marginBottom: 20,
            },
          ]}
        >
          First Name
        </Text>
        <View style={styles.profLoc}>
          <Text style={[styles.boldText, { fontWeight: "bold", fontSize: 20 }]}>
            Professions
          </Text>
          <Text style={[styles.boldText, { fontWeight: "bold", fontSize: 20 }]}>
            Location
          </Text>
        </View>
        <View style={styles.ratJob}>
          <View>
            <Text
              style={[
                styles.boldText,
                { textAlign: "center", fontSize: 30, fontWeight: "bold" },
              ]}
            >
              0<Text style={{ fontSize: 20 }}>.0</Text>
            </Text>
            <Text
              style={[styles.regText, { textAlign: "center", fontSize: 18 }]}
            >
              Ratings
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.boldText,
                { textAlign: "center", fontSize: 30, fontWeight: "bold" },
              ]}
            >
              000
            </Text>
            <Text style={[styles.regText, { textAlign: "center" }]}>
              Jobs Completed
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 30,
            flexDirection: "row",
            justifyContent: "space-around",
            alignSelf: "center",
            gap: "80%",
          }}
        >
          <SmallButton title="Edit Profile" />
          <SmallButton title="Share Profile" />
        </View>
        <View style={styles.socials}>
          <Text style={styles.regText}>Instagram</Text>
          <Text style={styles.regText}>Linkedin</Text>
          <Text style={styles.regText}>Twitter</Text>
          <Text style={styles.regText}>Facebook</Text>
        </View>
        <View style={styles.about}>
          <Text
            style={[
              styles.boldText,
              { fontSize: 30, fontWeight: "bold", marginBottom: 10 },
            ]}
          >
            About
          </Text>
          <Text style={[styles.regText]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </Text>
        </View>
        <View style={styles.postMenu}>
          <Pressable
            onPress={() => {
              setPosts(0);
            }}
          >
            <Text
              style={[
                styles.boldText,
                posts === 0
                  ? {
                      fontSize: 24,
                      textDecorationColor: "white",
                      textDecorationLine: "underline",
                      borderBottomColor: "white",
                      borderBottomWidth: 2, // Add this line
                    }
                  : { fontSize: 24 },
              ]}
            >
              Ads
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setPosts(1);
            }}
          >
            <Text
              style={[
                styles.boldText,
                posts === 1
                  ? {
                      fontSize: 24,
                      textDecorationColor: "white",
                      textDecorationLine: "underline",
                      borderBottomColor: "white",
                      borderBottomWidth: 2, // Add this line
                    }
                  : { fontSize: 24 },
              ]}
            >
              Posts
            </Text>
          </Pressable>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: 60,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    fontSize: 32,
    fontFamily: "NanumGothic_400Regular",
    marginBottom: 0,
  },
  boldText: {
    fontFamily: "NanumGothic_700Bold",
    color: "white",
  },
  regText: {
    fontFamily: "NanumGothic_400Regular",
    color: "white",
  },
  profLoc: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    gap: "70%",
    marginBottom: 35,
  },
  ratJob: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "100%",
    alignSelf: "center",
  },
  socials: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  postMenu: {
    flexDirection: "row",
    alignSelf: "center",
    gap: "100%",
  },
  about: {
    marginVertical: 30,
  },
});
