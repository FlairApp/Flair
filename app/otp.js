import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { supabase } from '../supabase';

export default function OtpScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState(null);

  // Envoyer l'OTP au numéro de téléphone
  const sendOtp = async () => {
    const { error } = await supabase.auth.signInWithOtp({ phone: phoneNumber });
    if (error) {
      setMessage(`Erreur : ${error.message}`);
    } else {
      setMessage('OTP envoyé ✅');
    }
  };

  // Vérifier le code OTP
  const verifyOtp = async () => {
    const { data, error } = await supabase.auth.verifyOtp({
      phone: phoneNumber,
      token: otp,
      type: 'sms',
    });

    if (error) {
      setMessage(`Erreur : ${error.message}`);
    } else {
      setMessage('Connexion réussie 🎉');
      setUserId(data.user.id);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text>Numéro de téléphone</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        placeholder="+33612345678"
        style={{ borderBottomWidth: 1, marginBottom: 12, paddingVertical: 8 }}
      />
      <Button title="Envoyer OTP" onPress={sendOtp} />

      {userId === null && (
        <>
          <Text style={{ marginTop: 20 }}>Code OTP</Text>
          <TextInput
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            placeholder="123456"
            style={{ borderBottomWidth: 1, marginBottom: 12, paddingVertical: 8 }}
          />
          <Button title="Vérifier OTP" onPress={verifyOtp} />
        </>
      )}

      {message ? <Text style={{ marginTop: 20 }}>{message}</Text> : null}
    </View>
  );
}