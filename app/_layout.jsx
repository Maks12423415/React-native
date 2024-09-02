import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

// RootLayout to główny layout aplikacji, zarządza strukturą nawigacji.
const RootLayout = () => {
  return (
    // Stack to kontener nawigacyjny, który obsługuje stackową nawigację (np. ekran po ekranie).
    <Stack>
      {/* Konfiguracja ekranu głównego ("index"), wyłączenie nagłówka (header) */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout; // Eksportowanie RootLayout jako domyślnego eksportu tego pliku.
