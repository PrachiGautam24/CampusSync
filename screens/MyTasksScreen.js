import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export default function MyTasksScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('active'); // 'active' or 'completed'

  const activeTasks = [
    {
      id: 1,
      title: 'Debugging Assistance',
      status: 'In Progress',
      statusColor: '#8B5CF6',
      statusBg: '#EDE9FE',
      time: 'Accepted · 1h ago',
      iconBg: '#EDE9FE',
    },
    {
      id: 2,
      title: 'Notes Sharing',
      status: 'Submitted',
      statusColor: '#8B5CF6',
      statusBg: '#EDE9FE',
      time: 'Due 21 Oct',
      iconBg: '#EDE9FE',
    },
  ];

  const completedTasks = [
    {
      id: 3,
      title: 'Project Guidance',
      status: 'Completed',
      statusColor: '#10B981',
      statusBg: '#D1FAE5',
      time: '19 Oct',
      iconBg: '#FEF3C7',
    },
  ];

  const tasks = activeTab === 'active' ? activeTasks : completedTasks;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Tasks</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'active' && styles.tabActive]}
            onPress={() => setActiveTab('active')}
          >
            <Text style={[styles.tabText, activeTab === 'active' && styles.tabTextActive]}>
              Active
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'completed' && styles.tabActive]}
            onPress={() => setActiveTab('completed')}
          >
            <Text style={[styles.tabText, activeTab === 'completed' && styles.tabTextActive]}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tasks List */}
        <View style={styles.tasksList}>
          {tasks.map((task) => (
            <TouchableOpacity key={task.id} style={styles.taskCard}>
              <View style={[styles.taskIconContainer, { backgroundColor: task.iconBg }]}>
                <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <Rect x="4" y="4" width="20" height="20" rx="2" stroke="#5B4FED" strokeWidth="2" fill="none"/>
                  <Path d="M10 14L13 17L18 12" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              </View>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskTime}>{task.time}</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: task.statusBg }]}>
                <Text style={[styles.statusText, { color: task.statusColor }]}>
                  {task.status}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    fontFamily: 'Inter_700Bold',
  },
  content: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  tabActive: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 3,
    borderBottomColor: '#5B4FED',
  },
  tabText: {
    fontSize: 15,
    color: '#9CA3AF',
    fontFamily: 'Inter_500Medium',
  },
  tabTextActive: {
    color: '#5B4FED',
    fontFamily: 'Inter_600SemiBold',
  },
  tasksList: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  taskIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_600SemiBold',
  },
  taskTime: {
    fontSize: 14,
    color: '#9CA3AF',
    fontFamily: 'Inter_400Regular',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 13,
    fontFamily: 'Inter_600SemiBold',
  },
});
