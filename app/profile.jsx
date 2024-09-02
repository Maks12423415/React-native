import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// Komponent Profile, który jest odpowiedzialny za ekran profilu.
const Profile = () => {
  return (
    // Główna View, która ustawia elementy w centrum ekranu i definiuje szare tło.
    <View className="flex-1 items-center justify-center bg-gray-300">
      {/* 
        Komentarzowany kod: Tekst, który wyświetlał "Profile is here" w czerwonym kolorze.
        Usunięty lub tymczasowo zakomentowany.
      */}
      {/* <Text className="text-red-600 ">Profile is here</Text> */}

      {/* Dodanie obrazu serca (heart.png) do ekranu */}
      <Image source={require("./heart.png")} />
    </View>
  );
};

export default Profile; // Eksportowanie Profile jako domyślnego eksportu tego pliku.

// Puste StyleSheet, miejsce na przyszłe style, jeśli będą potrzebne.
const styles = StyleSheet.create({});
