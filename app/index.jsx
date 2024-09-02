import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

// Główna funkcja App, która jest domyślnym eksportem tego pliku.
export default function App() {
  return (
    // Główna View, która ustawia elementy w centrum ekranu i definiuje białe tło.
    <View className="flex-1 items-center justify-center bg-white">
      {/* Wyświetla tekst "Aora!" na środku ekranu z rozmiarem 3xl */}
      <Text className="text-3xl">Aora!</Text>

      {/* Ustawia styl paska statusu na automatyczny, aby dostosować się do tła */}
      <StatusBar style="auto" />

      {/* Link do ekranu profilu, z niebieskim tekstem */}
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}
