import * as React from "react";
import { Dimensions, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import { checkLogged, login } from "../hooks/useConnexion";
import { RootTabScreenProps } from "../types";
import { useState } from "react";
import { StyleSheet } from "react-native";

var width = Dimensions.get("screen").width;
var height = Dimensions.get("screen").height;

export default function ConnectionScreen({
  navigation,
}: RootTabScreenProps<"Connexion">) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigation();

  const routeChange = (username: string, password: string) => {
    login(username, password);
    if (checkLogged()) {
      navigate.navigate("Modal");
    }
  };

  return (
    <View style={styles.vue}>
      <Text style={styles.title}>Find Me</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Nom d'utilisateur"
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Mot de passe"
      />

      <View style={styles.buttonView}>
        <Pressable
          style={styles.inscription}
          onPress={() => console.log(username, password)}
        >
          <Text style={styles.inscriptionText}>Inscription</Text>
        </Pressable>
        <Pressable
          style={styles.connexion}
          onPress={() => routeChange(username, password)}
        >
          <Text style={styles.connexionText}>Se connecter</Text>
        </Pressable>
      </View>
      <Text style={styles.version}>V.0.1</Text>
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
    height: 50,
    width: width / 1.5,
    marginTop: 40,
  },
  title: {
    color: "black",
    marginTop: height / 8,
    marginBottom: height / 14,
    textAlign: "center",
    fontSize: 60,
  },
  vue: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    height: height,
    width: width,
  },
  connexion: {
    position: "absolute",
    right: 0,
    alignSelf: "flex-start",
    justifyContent: "center",
    height: height / 20,
    width: width / 2.5,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 40,
  },
  connexionText: {
    color:"white",
    textAlign: "center",
  },
  inscription: {
    position: "relative",
    left: 0,
    alignSelf: "flex-start",
    justifyContent: "center",
    height: height / 20,
    width: width / 4,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "white",
    borderRadius: 40,
  },
  inscriptionText: {
    textAlign: "center",
    color: "black",
  },
  buttonView: {
    backgroundColor: "white",
    width: width / 1.5,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  version: {
    color: "black",
    position: "absolute",
    right: 50,
    bottom: 50,
  },
});
