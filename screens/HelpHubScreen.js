import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function HelpHubScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'my'
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Academic', 'Technical', 'Admin'];

  const tasks = [
    {
      id: 1,
      title: 'Debugging Assistance',
      department: 'CSE Dept',
      priority: 'High Priority',
      time: '2h ago',
      status: 'Open',
      category: 'Technical',
    },
    {
      id: 2,
      title: 'Notes Sharing',
      department: 'ECE Dept',
      priority: 'Medium',
      time: '5h ago',
      status: 'Open',
      category: 'Academic',
    },
    {
      id: 3,
      title: 'Project Guidance',
      department: 'AI & ML',
      priority: 'Medium',
      time: '1d ago',
      status: 'Open',
      category: 'Academic',
    },
  ];

  const filteredTasks = tasks.filter(task => 
    selectedCategory === 'All' || task.category === selectedCategory
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Hub</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'all' && styles.tabActive]}
            onPress={() => setActiveTab('all')}
          >
            <Text style={[styles.tabText, activeTab === 'all' && styles.tabTextActive]}>
              All Tasks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'my' && styles.tabActive]}
            onPress={() => navigation.navigate('MyTasks')}
          >
            <Text style={[styles.tabText, activeTab === 'my' && styles.tabTextActive]}>
              My Tasks
            </Text>
          </TouchableOpacity>
        </View>

        {/* Category Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Tasks List */}
        <View style={styles.tasksList}>
          {filteredTasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              style={styles.taskCard}
              onPress={() => navigation.navigate('TaskDetails', { task })}
            >
              <View style={styles.taskIconContainer}>
                <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <Rect x="4" y="4" width="20" height="20" rx="2" stroke="#5B4FED" strokeWidth="2" fill="none"/>
                  <Path d="M10 14L13 17L18 12" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              </View>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDetails}>
                  {task.department} · {task.priority} · {task.time}
                </Text>
              </View>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{task.status}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Post a Task Button */}
      <View style={styles.postButtonContainer}>
        <TouchableOpacity 
          style={styles.postButton}
          onPress={() => navigation.navigate('CreateTask')}
        >
          <Text style={styles.postButtonText}>+ Post a Task</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
          </Svg>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('RoomFinder')}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Path d="M2 17L12 22L22 17" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Path d="M2 12L12 17L22 12" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
          </Svg>
          <Text style={styles.navText}>Rooms</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('ActivityLookup')}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Rect x="3" y="3" width="7" height="7" rx="1" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Rect x="14" y="3" width="7" height="7" rx="1" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Rect x="3" y="14" width="7" height="7" rx="1" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Rect x="14" y="14" width="7" height="7" rx="1" stroke="#5B4FED" strokeWidth="2" fill="none"/>
          </Svg>
          <Text style={[styles.navText, styles.navTextActive]}>Activities</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="8" r="4" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="#9CA3AF" strokeWidth="2"/>
          </Svg>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 16,
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
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: '#5B4FED',
  },
  categoryText: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'Inter_500Medium',
  },
  categoryTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Inter_600SemiBold',
  },
  tasksList: {
    paddingHorizontal: 20,
    paddingBottom: 180,
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
    backgroundColor: '#F3E8FF',
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
  taskDetails: {
    fontSize: 13,
    color: '#9CA3AF',
    fontFamily: 'Inter_400Regular',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#D1FAE5',
  },
  statusText: {
    fontSize: 13,
    color: '#059669',
    fontFamily: 'Inter_600SemiBold',
  },
  postButtonContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
  },
  postButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#5B4FED',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  postButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 4,
    fontFamily: 'Inter_500Medium',
  },
  navTextActive: {
    color: '#5B4FED',
    fontFamily: 'Inter_600SemiBold',
  },
});
