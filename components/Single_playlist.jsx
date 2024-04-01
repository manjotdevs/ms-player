import { View, Image, Text } from "react-native";
import React from "react";

export default function Single_playlist(props) {
  return (
    <View className="bg-gray-900 rounded">
      <View>
        <Image className="h-24 w-24 rounded-t mb-2" source={props.image} />
      </View>
      <View>
        <Text className="text-gray-50">{props.text}</Text>
      </View>
    </View>
  );
}
