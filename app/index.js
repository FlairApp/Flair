import { useRouter } from 'expo-router';
import React from 'react';
import { Button, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Aller à l'écran OTP" onPress={() => router.push('/otp')} />
    </View>
  );
}
