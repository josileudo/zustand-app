import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
