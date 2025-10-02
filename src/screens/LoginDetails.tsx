import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useDispatch, useSelector } from "react-redux";
import { RootState, logout } from "../store/store";
import { AppDispatch } from "../store/store";

type Props = NativeStackScreenProps<RootStackParamList, "LoginD">;

export default function LoginDetailsScreen({ navigation }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      {user && <Text style={styles.text}>Email: {user.email}</Text>}

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 18, marginBottom: 30 },
  logoutBtn: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  logoutText: { color: "#fff", fontWeight: "bold" },
});
