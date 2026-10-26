
import React, { useState } from 'react';
import {
  View, Text, TextInput, Pressable, StyleSheet, Alert,
} from 'react-native';

export default function UserLoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!email.trim() || !password) {
      Alert.alert('Missing Details', 'Enter your email and password.');
      return;
    }
    navigation.replace('UserDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Login</Text>
      <Text style={styles.subtitle}>Sign in to track your issues.</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  heading: { fontSize: 27, fontWeight: 'bold', color: '#172554' },
  subtitle: { color: '#64748B', marginTop: 8, marginBottom: 25 },
  label: { color: '#334155', fontWeight: '600', marginBottom: 7, marginTop: 14 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 10, padding: 14 },
  button: { backgroundColor: '#2563EB', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 25, marginBottom: 20 },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  link: { color: '#2563EB', textAlign: 'center', marginTop: 10 },
});
