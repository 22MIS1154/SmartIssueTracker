
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

const reportData = [
  {
    title: 'Total Tickets',
    value: '24',
    description: 'All reported issues',
    color: '#2563EB',
  },
  {
    title: 'Resolved Tickets',
    value: '11',
    description: 'Successfully resolved',
    color: '#059669',
  },
  {
    title: 'Pending Tickets',
    value: '8',
    description: 'Awaiting action',
    color: '#D97706',
  },
  {
    title: 'In Progress',
    value: '5',
    description: 'Currently being handled',
    color: '#7C3AED',
  },
  {
    title: 'Overdue Tickets',
    value: '3',
    description: 'Past their target deadline',
    color: '#DC2626',
  },
];

export default function ReportsScreen() {
  const total = 24;
  const resolved = 11;
  const resolutionRate = Math.round((resolved / total) * 100);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Reports & Analytics</Text>

      <Text style={styles.subtitle}>
        Monitor ticket performance and issue resolution.
      </Text>

      <View style={styles.highlightCard}>
        <Text style={styles.highlightLabel}>Resolution Rate</Text>
        <Text style={styles.highlightValue}>{resolutionRate}%</Text>
        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              { width: `${resolutionRate}%` },
            ]}
          />
        </View>
        <Text style={styles.highlightDescription}>
          {resolved} of {total} tickets resolved
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Ticket Overview</Text>

      {reportData.map((item) => (
        <View key={item.title} style={styles.card}>
          <View
            style={[
              styles.indicator,
              { backgroundColor: item.color },
            ]}
          />

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>
              {item.description}
            </Text>
          </View>

          <Text style={[styles.cardValue, { color: item.color }]}>
            {item.value}
          </Text>
        </View>
      ))}

      <View style={styles.noteCard}>
        <Text style={styles.noteTitle}>Admin Insight</Text>
        <Text style={styles.noteText}>
          Review pending and overdue tickets regularly to improve
          resolution time and employee satisfaction.
        </Text>
      </View>

      <Text style={styles.footer}>
        Demo report — live analytics will be connected to the backend.
      </Text>
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
  highlightCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 14,
    marginBottom: 25,
  },
  highlightLabel: {
    color: '#64748B',
    fontSize: 15,
  },
  highlightValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 8,
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#E2E8F0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 15,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 10,
  },
  highlightDescription: {
    color: '#64748B',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 13,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  indicator: {
    width: 5,
    height: 45,
    borderRadius: 5,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    color: '#172554',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 5,
  },
  cardValue: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  noteCard: {
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
    padding: 17,
    marginTop: 12,
  },
  noteTitle: {
    color: '#1D4ED8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteText: {
    color: '#1E40AF',
    lineHeight: 21,
    marginTop: 8,
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 20,
  },
});
