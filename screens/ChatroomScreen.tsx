import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { useState } from "react";
import { Dimensions, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../components/Themed";

var width = Dimensions.get("screen").width;
export default function ChatroomScreen() {
  const [message, setMessage] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.bulle}>
        <Text style={styles.message}>Salut !</Text>
      </View>
      <View style={styles.reponse}>
        <Text style={styles.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, earum
          natus. Praesentium natus inventore quod animi fugiat earum ipsa hic
          quos, maxime nam similique aperiam tempore, temporibus quam officiis
          dicta?
        </Text>
      </View>

      <View style={styles.send}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMessage(text)}
          value={message}
          placeholder="Message"
        />
        <MaterialCommunityIcons style={styles.arrow} name="arrow-right" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    height: 30,
    width: width * 0.7,
    marginTop: 40,
    fontSize: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 40,
    backgroundColor: "white",
  },
  reponse: {
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "solid",
    backgroundColor: "white",
    flex: 0,
    alignSelf: "flex-start",
    marginLeft: 40,
    maxWidth: width / 2,
    padding: 10,
    marginTop: 20,
  },
  bulle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "solid",
    backgroundColor: "white",
    flex: 0,
    alignSelf: "flex-end",
    marginRight: 40,
    maxWidth: width / 2,
  },
  message: { backgroundColor: "white", color: "black" },
  arrow: {
    width: width * 0.1,

    marginBottom: 10,
    textAlign: "center",
    alignSelf: "flex-end",
  },
  send: {
    backgroundColor: "white",
    flex: 0,
    flexDirection: "row",
  },
});
