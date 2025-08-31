// app/_layout.js
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      <Stack.Screen name="otp" options={{ title: 'Vérification OTP' }} />
    </Stack>
  );
}
