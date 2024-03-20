import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function Buttion1(props) {
  return (
    <TouchableOpacity className="bg-green-500  rounded-full px-4 py-1">
      <Text className="text-white text-base font-bold">{props.tittle}</Text>
    </TouchableOpacity>
  );
}
