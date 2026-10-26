
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TicketDetailsScreen({ route }) {
  const ticket = route.params?.ticket || {
    id: 'TKT-101',
    title: 'Laptop not working',
    category: 'Hardware',
    status: 'Pending',
    description: 'The issue description will appear here.',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.id}>{ticket.id}</Text>
      <Text style={styles.heading}>{ticket.title}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{ticket.status || 'Pending'}</Text>

        <Text style={styles.label}>Category</Text>
        <Text style={styles.value}>{ticket.category || 'Not specified'}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>
          {ticket.description || 'No description provided.'}
        </Text>

        <Text style={styles.label}>Impact</Text>
        <Text style={styles.value}>{ticket.impact || 'Not specified'}</Text>

        <Text style={styles.label}>Urgency</Text>
        <Text style={styles.value}>{ticket.urgency || 'Not specified'}</Text>
      </View>

      <Text style={styles.note}>
        Ticket updates and comments will be connected to the backend later.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  id: { color: '#64748B', fontSize: 14 },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#172554', marginTop: 8 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 18, marginTop: 20 },
  label: { color: '#64748B', marginTop: 15, marginBottom: 5 },
  value: { color: '#172554', fontSize: 16, lineHeight: 23 },
  note: { color: '#64748B', marginTop: 18, lineHeight: 21 },
});
