import React from "react";
import { View, Text } from "react-native";
import { FontAwesome, Entypo, Ionicons, Feather } from "@expo/vector-icons/";

export default function Navbar() {
  return (
    <View className="flex-row align-bottom items-center justify-between gap-x-14 px-8 py-3 bg-black h-20">
      <Entypo name="home" size={30} color="white" />
      <FontAwesome name="search" size={30} color="white" />
      <Ionicons name="library" size={30} color="white" />
      <Feather name="settings" size={30} color="white" />
    </View>
  );
}
