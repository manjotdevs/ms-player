import { StatusBar, View, SafeAreaView, ScrollView, Text } from "react-native";
import Navbar from "./components/Navbar";
import Buttion1 from "./components/Button1";
import Buttion2 from "./components/Button2";
import Mix_playlis from "./components/Mix_playlist";
import Single_playlist from "./components/Single_playlist";

export default function App() {
  return (
    <SafeAreaView className="pt-4 text-white bg-gray-950 h-full ">
      <View className="pt-2">
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
        <ScrollView>
          <SafeAreaView>
            <View className="flex-row px-1 mt-5 ">
              <View className="px-1">
                <Mix_playlis
                  image={require("./assets/Images/tarsem_jassar.jpg")}
                  tittle={`Tarsem Jassar`}
                />
                <Mix_playlis
                  image={require("./assets/Images/sidh_moose_wala_mix.jpg")}
                  tittle={`Sidhu Moose`}
                />
                <Mix_playlis
                  image={require("./assets/Images/mix.jpg")}
                  tittle={`Daily Mix1`}
                />
              </View>
              <View className="">
                <Mix_playlis
                  image={require("./assets/Images/new_music.jpg")}
                  tittle={`New Music`}
                />
                <Mix_playlis
                  image={require("./assets/Images/punjabi_101.jpg")}
                  tittle={`Punjabi 101`}
                />
                <Mix_playlis
                  image={require("./assets/Images/maga_punjabi_hits.jpg")}
                  tittle="Mega Punjabi "
                />
              </View>
            </View>
            <ScrollView horizontal>
              <Single_playlist
                image={require("./assets/Images/punjabi_101.jpg")}
                text="Play List"
              />
            </ScrollView>
          </SafeAreaView>
        </ScrollView>
        <Navbar />
        <StatusBar backgroundColor="#1A202C" barStyle="light-content" />
      </View>
    </SafeAreaView>
  );
}
