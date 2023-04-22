import { View, SafeAreaView, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function Details() {
  return (
      <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                  <Link href="/search">Go search</Link>
            </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        backgroundColor:"#1E213A"
      },
      main: {
        borderColor:"blue",
        borderStyle:"solid",
        borderWidth:1,
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
      },
      title: {
        fontSize: 64,
        fontWeight: "bold",
      },
      subtitle: {
        fontSize: 36,
        color: "#38434D",
      },
    });