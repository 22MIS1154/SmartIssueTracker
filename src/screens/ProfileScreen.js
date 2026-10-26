
import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>U</Text>
      </View>

      <Text style={styles.name}>Demo User</Text>
      <Text style={styles.email}>user@example.com</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Employee ID</Text>
        <Text style={styles.value}>EMP-001</Text>
        <Text style={styles.label}>Department</Text>
        <Text style={styles.value}>Engineering</Text>
        <Text style={styles.label}>Account Role</Text>
        <Text style={styles.value}>User</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert('Profile', 'Profile editing will be added next.')}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </Pressable>

      <Pressable
        style={styles.logout}
        onPress={() => navigation.replace('Welcome')}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 22, alignItems: 'center' },
  avatar: {
    width: 90, height: 90, borderRadius: 45, backgroundColor: '#DBEAFE',
    justifyContent: 'center', alignItems: 'center', marginTop: 20,
  },
  avatarText: { fontSize: 35, fontWeight: 'bold', color: '#2563EB' },
  name: { fontSize: 23, fontWeight: 'bold', color: '#172554', marginTop: 15 },
  email: { color: '#64748B', marginTop: 5 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 20, width: '100%', marginTop: 25 },
  label: { color: '#64748B', marginTop: 12 },
  value: { color: '#172554', fontSize: 16, marginTop: 5 },
  button: { backgroundColor: '#2563EB', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center', marginTop: 22 },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold' },
  logout: { padding: 17 },
  logoutText: { color: '#DC2626', fontWeight: 'bold' },
});
