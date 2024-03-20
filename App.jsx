import { Text, View, SafeAreaView } from "react-native";
import Navbar from "./components/Navbar";
import Buttion1 from "./components/Button1";
import Buttion2 from "./components/Button2";

export default function App() {
  return (
    <SafeAreaView className="pt-8 text-white bg-gray-950 h-full ">
      <View>
        <View className="flex-row justify-items-start px-2 space-x-2">
          <View>
            <Buttion1 tittle="All" />
          </View>
          <View>
            <Buttion2 tittle="Play List" />
          </View>
          <View>
            <Buttion2 tittle="Downloads" />
          </View>
        </View>
        <Navbar />
      </View>
    </SafeAreaView>
  );
}
