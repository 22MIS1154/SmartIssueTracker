
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';

const initialUsers = [
  {
    id: 'EMP-001',
    name: 'Arun Kumar',
    email: 'arun@example.com',
    department: 'Engineering',
    ticketCount: 4,
  },
  {
    id: 'EMP-002',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    department: 'IT Support',
    ticketCount: 2,
  },
  {
    id: 'EMP-003',
    name: 'Rahul Reddy',
    email: 'rahul@example.com',
    department: 'Operations',
    ticketCount: 3,
  },
];

export default function UserManagementScreen({ navigation }) {
  const [users, setUsers] = useState(initialUsers);

  const confirmDeleteUser = (user) => {
    Alert.alert(
      'Delete User Permanently?',
      `Are you sure you want to delete ${user.name} (${user.id})? This action cannot be undone.`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete User',
          style: 'destructive',
          onPress: () => {
            // Demo only: removes the user from this screen.
            // Replace this with a backend DELETE request.
            setUsers((currentUsers) =>
              currentUsers.filter((item) => item.id !== user.id)
            );

            Alert.alert(
              'Demo Deletion',
              'The user was removed from this demo list. Permanent deletion from the database must be implemented by the backend.'
            );
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Manage Users</Text>
      <Text style={styles.subtitle}>
        View employee information, inspect tickets, or remove an account.
      </Text>

      <View style={styles.summary}>
        <Text style={styles.summaryNumber}>{users.length}</Text>
        <Text style={styles.summaryLabel}>Users in this demo list</Text>
      </View>

      {users.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>No users remaining</Text>
          <Text style={styles.emptyText}>
            Employee records will appear here when available.
          </Text>
        </View>
      ) : (
        users.map((user) => (
          <View key={user.id} style={styles.card}>
            <View style={styles.userHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {user.name.charAt(0)}
                </Text>
              </View>

              <View style={styles.userDetails}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.info}>{user.id}</Text>
                <Text style={styles.info}>{user.email}</Text>
                <Text style={styles.info}>
                  Department: {user.department}
                </Text>
                <Text style={styles.ticketCount}>
                  {user.ticketCount} tickets reported
                </Text>
              </View>
            </View>

            <Pressable
              style={styles.viewButton}
              onPress={() =>
                navigation.navigate('MyTickets', {
                  employeeId: user.id,
                  employeeName: user.name,
                  isAdmin: true,
                })
              }
            >
              <Text style={styles.viewButtonText}>
                View User Tickets
              </Text>
            </Pressable>

            <Pressable
              style={styles.deleteButton}
              onPress={() => confirmDeleteUser(user)}
            >
              <Text style={styles.deleteButtonText}>
                Delete User Permanently
              </Text>
            </Pressable>
          </View>
        ))
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
    fontSize: 25,
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
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
  },
  summaryNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  summaryLabel: {
    color: '#1E40AF',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    padding: 16,
    marginBottom: 15,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  userDetails: {
    flex: 1,
  },
  name: {
    color: '#172554',
    fontSize: 17,
    fontWeight: 'bold',
  },
  info: {
    color: '#64748B',
    marginTop: 5,
    fontSize: 13,
  },
  ticketCount: {
    color: '#2563EB',
    fontWeight: '600',
    marginTop: 10,
  },
  viewButton: {
    backgroundColor: '#2563EB',
    borderRadius: 9,
    alignItems: 'center',
    padding: 12,
    marginTop: 17,
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 9,
    alignItems: 'center',
    padding: 12,
    marginTop: 10,
  },
  deleteButtonText: {
    color: '#B91C1C',
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
    textAlign: 'center',
    marginTop: 8,
  },
});
