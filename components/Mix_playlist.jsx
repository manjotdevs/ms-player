import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

export default function Mix_playlist(props) {
  return (
    <View className="bg-gray-900 rounded-lg">
      <TouchableOpacity className="">
        <Image className="h-16 w-16 rounded-l-lg" source={props.image} />
      </TouchableOpacity>
    </View>
  );
}
