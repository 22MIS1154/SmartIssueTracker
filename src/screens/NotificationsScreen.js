
import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';

const notifications = [
  { id: '1', title: 'Ticket received', message: 'Your laptop issue has been registered.', time: 'Today' },
  { id: '2', title: 'Ticket update', message: 'Your email access issue is in progress.', time: 'Yesterday' },
  { id: '3', title: 'Issue resolved', message: 'Your software installation issue is resolved.', time: 'Yesterday' },
];

export default function NotificationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      {notifications.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.title}>🔔  {item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#172554', marginBottom: 20 },
  card: { backgroundColor: '#FFFFFF', padding: 17, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#172554' },
  message: { color: '#475569', marginTop: 10, lineHeight: 21 },
  time: { color: '#94A3B8', fontSize: 12, marginTop: 10 },
});
