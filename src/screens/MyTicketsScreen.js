
import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';

const sampleTickets = [
  {
    id: 'TKT-101',
    employeeId: 'EMP-001',
    employeeName: 'Arun Kumar',
    title: 'Laptop not working',
    category: 'Hardware',
    status: 'Pending',
    priority: 'High',
    description: 'Laptop does not start.',
  },
  {
    id: 'TKT-102',
    employeeId: 'EMP-002',
    employeeName: 'Priya Sharma',
    title: 'Email access issue',
    category: 'Account / Access',
    status: 'In Progress',
    priority: 'Medium',
    description: 'Unable to access company email.',
  },
  {
    id: 'TKT-103',
    employeeId: 'EMP-001',
    employeeName: 'Arun Kumar',
    title: 'Software installation',
    category: 'Software',
    status: 'Resolved',
    priority: 'Low',
    description: 'Required software installation.',
  },
  {
    id: 'TKT-104',
    employeeId: 'EMP-003',
    employeeName: 'Rahul Reddy',
    title: 'Network connection issue',
    category: 'Network',
    status: 'Pending',
    priority: 'Critical',
    description: 'Office network connection is unstable.',
  },
];

export default function MyTicketsScreen({ navigation, route }) {
  const params = route.params || {};

  const isAdmin = params.isAdmin === true;
  const employeeId = params.employeeId;
  const employeeName = params.employeeName;

  const visibleTickets = employeeId
    ? sampleTickets.filter((ticket) => ticket.employeeId === employeeId)
    : sampleTickets;

  const heading = employeeName
    ? `${employeeName}'s Tickets`
    : isAdmin
      ? 'Manage All Tickets'
      : 'My Tickets';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>{heading}</Text>

      <Text style={styles.subtitle}>
        {isAdmin
          ? employeeName
            ? 'View and manage this employee’s reported issues.'
            : 'Review, assign and update employee issues.'
          : 'Track the status of your reported issues.'}
      </Text>

      <View style={styles.summary}>
        <Text style={styles.summaryNumber}>{visibleTickets.length}</Text>
        <Text style={styles.summaryLabel}>
          {isAdmin ? 'Tickets to manage' : 'Tickets displayed'}
        </Text>
      </View>

      {visibleTickets.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>No tickets found</Text>
          <Text style={styles.emptyText}>
            There are no tickets to display for this selection.
          </Text>
        </View>
      ) : (
        visibleTickets.map((ticket) => (
          <Pressable
            key={ticket.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate('TicketDetails', {
                ticket,
                isAdmin,
              })
            }
          >
            <View style={styles.row}>
              <Text style={styles.id}>{ticket.id}</Text>
              <Text
                style={[
                  styles.status,
                  ticket.status === 'Resolved'
                    ? styles.resolved
                    : ticket.status === 'Pending'
                      ? styles.pending
                      : styles.progress,
                ]}
              >
                {ticket.status}
              </Text>
            </View>

            <Text style={styles.title}>{ticket.title}</Text>

            {isAdmin && (
              <Text style={styles.employee}>
                Reported by: {ticket.employeeName}
              </Text>
            )}

            <Text style={styles.category}>{ticket.category}</Text>
            <Text style={styles.priority}>
              Priority: {ticket.priority}
            </Text>

            <Text style={styles.openDetails}>View details →</Text>
          </Pressable>
        ))
      )}

      {!isAdmin && (
        <Pressable
          style={styles.createButton}
          onPress={() => navigation.navigate('CreateTicket')}
        >
          <Text style={styles.createButtonText}>＋ Raise New Ticket</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 35,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#172554',
  },
  subtitle: {
    color: '#64748B',
    marginTop: 8,
    marginBottom: 20,
    lineHeight: 21,
  },
  summary: {
    backgroundColor: '#DBEAFE',
    padding: 17,
    borderRadius: 12,
    marginBottom: 18,
  },
  summaryNumber: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  summaryLabel: {
    color: '#1E40AF',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 13,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  id: {
    color: '#64748B',
    fontSize: 13,
  },
  status: {
    fontWeight: '600',
    fontSize: 12,
  },
  pending: {
    color: '#D97706',
  },
  progress: {
    color: '#2563EB',
  },
  resolved: {
    color: '#059669',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#172554',
    marginTop: 12,
  },
  employee: {
    color: '#475569',
    marginTop: 7,
  },
  category: {
    color: '#64748B',
    marginTop: 7,
  },
  priority: {
    color: '#64748B',
    marginTop: 6,
  },
  openDetails: {
    color: '#2563EB',
    fontWeight: 'bold',
    marginTop: 13,
  },
  createButton: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 12,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#172554',
  },
  emptyText: {
    color: '#64748B',
    marginTop: 8,
    textAlign: 'center',
  },
});
