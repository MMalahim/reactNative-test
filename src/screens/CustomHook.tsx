import { Text, View, StyleSheet } from "react-native";
import useNetworkStatus from "../hooks/useNetworkStatus";

const CustomHook = () => {
  const isOnline = useNetworkStatus();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.banner,
          { backgroundColor: isOnline ? "#a6e5b8ff" : "#f89f9fff" },
        ]}
      >
        <Text>{isOnline ? "Online" : "Offline"}</Text>
      </View>
    </View>
  );
};

export default CustomHook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    padding: 20,
    width: 300,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: "center",
  },
});
