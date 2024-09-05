import { StyleSheet, Text, View, Image, SectionList } from "react-native";
import React from "react";

// Dane do SectionList
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

// Komponent Profile, odpowiedzialny za ekran profilu.
const Profile = () => {
  return (
    // Główna View, która ustawia elementy w centrum ekranu i definiuje szare tło.
    <View className="flex-1 items-center justify-center  bg-gray-300">
      {/* Zakomentowany tekst: "Profile is here" */}
      {/* <Text className="text-red-600 ">Profile is here</Text> */}

      {/* Dodanie obrazu serca (heart.png) */}
      {/* <Image
        source={require("./heart.png")}
        style={{ width: 100, height: 100 }}
      /> */}

      {/* Wywołanie komponentu SectionList */}
      <SectionList
        // Dane do wyświetlenia w sekcjach
        sections={DATA}
        // Klucz, który umożliwia identyfikację każdego elementu
        keyExtractor={(item, index) => item + index}
        // Funkcja renderująca każdy element sekcji
        renderItem={({ item }) => (
          <View
            style={{
              padding: 20,
              margin: 3,
              backgroundColor: "yellow",
              borderRadius: 15,
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
        // Funkcja renderująca nagłówek sekcji
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={{
              backgroundColor: "#eee",
              padding: 10,
              borderRadius: 15,
              margin: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Eksportowanie Profile jako domyślnego komponentu
export default Profile;

// Puste StyleSheet, miejsce na przyszłe style.
const styles = StyleSheet.create({});
