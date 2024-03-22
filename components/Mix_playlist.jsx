import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

export default function Mix_playlist(props) {
  return (
    <View className=" pb-3 pr-1 pl-1">
      <TouchableOpacity className="h-16 bg-gray-900 rounded-lg flex-row">
        <View className="h-16">
          <Image className="h-full w-16 rounded-l-lg" source={props.image} />
        </View>
        <View className="justify-center items-center">
          <Text className="text-white w-28 pl-1 py-4 font-bold">
            {props.tittle}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
