import * as React from "react";
import { Text, Dimensions, StyleSheet, View } from "react-native";

var width = Dimensions.get("screen").width;
var height = Dimensions.get("screen").height;

export default function FriendsScreen() {
  var mapped = [
    {
      nom: "Laetitia",
      message: "Hey ! ",
    },
    {
      nom: "Nicolas",
      message: "Bonsoir",
    },
    {
      nom: "Lucas",
      message: "Venez on va faire de l'escalade",
    },
    {
      nom: "David",
      message: "Bonne bière",
    },
  ];

  return (
    <View style={styles.container}>
      {mapped.map((friends) => (
        <View style={styles.friends}>
          <Text style={styles.name}>{friends.nom}</Text>
          <Text>{friends.message}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    color: "black",
  },
  friends: {
    marginBottom: 15,
    padding: 10,
    width: width / 1.2,
    height: 80,
    borderWidth: 1,
    borderRadius: 20,
    borderStyle: "solid",
    backgroundColor: "white",
    color: "black",
  },
  name: {
    fontSize: 20,
  },
});
