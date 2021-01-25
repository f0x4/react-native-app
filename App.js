import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";

import Post from "./Post";

export default function App() {
  return (
    <View style={styles.x}>
      <View style={styles.head}>
        <Text style={styles.title}>Новости</Text>
      </View>
      <ScrollView style={styles.x}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
      <View style={styles.nav}>
        <View style={styles.grey}></View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F2F2F2",
    padding: 8,
  },
  title: {
    fontFamily: "Actor",
    margin: 35,
    fontSize: 20,
    textAlign: "center",
  },
  x: {
    flex: 1,
  },
  nav: {

    color: "#000",
    height: 70,
  },
  grey: {
    position: "relative",
    color: "#fff",
    width: 20,
    height: 20,
    zIndex: 0,
  }
});
