
import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, Pressable,
} from 'react-native';

const tickets = [
  { id: 'TKT-101', title: 'Laptop not working', status: 'Pending', color: '#D97706' },
  { id: 'TKT-102', title: 'Email access issue', status: 'In Progress', color: '#2563EB' },
  { id: 'TKT-103', title: 'Software installation', status: 'Resolved', color: '#059669' },
];

export default function UserDashboardScreen({ navigation }) {
  const openTicket = (ticket) =>
    navigation.navigate('TicketDetails', { ticket });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Hello! 👋</Text>
      <Text style={styles.heading}>Welcome to Smart Issue Tracker</Text>
      <Text style={styles.subtitle}>
        Raise issues and track their progress in one place.
      </Text>

      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.number}>3</Text>
          <Text style={styles.statLabel}>Raised</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.number}>2</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.number}>1</Text>
          <Text style={styles.statLabel}>Resolved</Text>
        </View>
      </View>

      <Pressable
        style={styles.primaryButton}
        onPress={() => navigation.navigate('CreateTicket')}
      >
        <Text style={styles.buttonText}>＋  Create New Ticket</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      {[
        ['📋', 'My Tickets', 'MyTickets'],
        ['🔔', 'Notifications', 'Notifications'],
        ['👤', 'My Profile', 'Profile'],
      ].map(([emoji, label, route]) => (
        <Pressable
          key={route}
          style={styles.action}
          onPress={() => navigation.navigate(route)}
        >
          <Text style={styles.actionText}>{emoji}  {label}</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      ))}

      <Text style={styles.sectionTitle}>Recent Tickets</Text>
      {tickets.map((ticket) => (
        <Pressable
          key={ticket.id}
          style={styles.ticket}
          onPress={() => openTicket(ticket)}
        >
          <Text style={styles.ticketTitle}>{ticket.title}</Text>
          <Text style={styles.ticketId}>{ticket.id}</Text>
          <Text style={{ color: ticket.color, marginTop: 6 }}>
            ● {ticket.status}
          </Text>
        </Pressable>
      ))}

      <Pressable
        style={styles.logout}
        onPress={() => navigation.replace('Welcome')}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 35 },
  greeting: { fontSize: 17, color: '#64748B' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#172554', marginTop: 6 },
  subtitle: { color: '#64748B', marginTop: 8, lineHeight: 21 },
  stats: { flexDirection: 'row', gap: 10, marginVertical: 22 },
  statCard: {
    flex: 1, backgroundColor: '#FFFFFF', borderRadius: 12,
    padding: 15, alignItems: 'center',
  },
  number: { fontSize: 25, fontWeight: 'bold', color: '#2563EB' },
  statLabel: { color: '#64748B', marginTop: 5 },
  primaryButton: {
    backgroundColor: '#2563EB', padding: 16,
    borderRadius: 12, alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  sectionTitle: {
    fontSize: 18, fontWeight: 'bold', color: '#172554',
    marginTop: 25, marginBottom: 12,
  },
  action: {
    backgroundColor: '#FFFFFF', padding: 17, borderRadius: 10,
    marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between',
  },
  actionText: { fontSize: 15, color: '#172554' },
  arrow: { fontSize: 22, color: '#64748B' },
  ticket: {
    backgroundColor: '#FFFFFF', padding: 16,
    borderRadius: 12, marginBottom: 10,
  },
  ticketTitle: { fontSize: 16, fontWeight: 'bold', color: '#172554' },
  ticketId: { color: '#64748B', marginTop: 5 },
  logout: { alignItems: 'center', marginTop: 25, padding: 14 },
  logoutText: { color: '#DC2626', fontWeight: 'bold' },
});
