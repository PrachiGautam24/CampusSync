import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function DashboardScreen({ route, navigation }) {
  const { userName = 'Prachi' } = route.params || {};

  const quickActions = [
    { id: 1, name: 'Find Rooms', icon: 'rooms', color: '#E8E5FF', screen: 'RoomFinder' },
    { id: 2, name: 'Events', icon: 'events', color: '#E8E5FF', screen: 'ActivityLookup' },
    { id: 3, name: 'Help Hub', icon: 'help', color: '#E5F5F8', screen: 'HelpHub' },
    { id: 4, name: 'Lost &\nFound', icon: 'lost', color: '#FFE8E8', screen: 'LostAndFound' },
  ];

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'rooms':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Path d="M2 17L12 22L22 17" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Path d="M2 12L12 17L22 12" stroke="#5B4FED" strokeWidth="2" fill="none"/>
          </Svg>
        );
      case 'events':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Rect x="3" y="4" width="18" height="18" rx="2" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Path d="M3 10H21" stroke="#5B4FED" strokeWidth="2"/>
            <Path d="M8 2V6" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
            <Path d="M16 2V6" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
          </Svg>
        );
      case 'help':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="12" r="9" stroke="#5BBFCD" strokeWidth="2" fill="none"/>
            <Path d="M12 17V17.01" stroke="#5BBFCD" strokeWidth="2" strokeLinecap="round"/>
            <Path d="M12 13.5C12 13.5 14 12 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10" stroke="#5BBFCD" strokeWidth="2" strokeLinecap="round"/>
          </Svg>
        );
      case 'lost':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="#EF4444" strokeWidth="2" fill="none"/>
            <Circle cx="12" cy="10" r="3" stroke="#EF4444" strokeWidth="2" fill="none"/>
          </Svg>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, {userName}! 👋</Text>
            <Text style={styles.subGreeting}>Good to see you back</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity 
              style={styles.notificationButton}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <Path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.profilePicture}
              onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.profileInitial}>P</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Today's Classes Card */}
        <View style={styles.classesCard}>
          <View style={styles.classesIconContainer}>
            <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <Rect x="4" y="6" width="20" height="18" rx="2" stroke="white" strokeWidth="2" fill="none"/>
              <Path d="M4 12H24" stroke="white" strokeWidth="2"/>
              <Path d="M10 4V8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <Path d="M18 4V8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </Svg>
          </View>
          <View style={styles.classesInfo}>
            <Text style={styles.classesTitle}>Today's Classes</Text>
            <Text style={styles.classesCount}>3 classes</Text>
          </View>
          <TouchableOpacity style={styles.viewTimetableButton}>
            <Text style={styles.viewTimetableText}>View Timetable →</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsGrid}>
          {quickActions.map((action) => (
            <TouchableOpacity 
              key={action.id} 
              style={styles.quickActionCard}
              onPress={() => action.screen && navigation.navigate(action.screen)}
            >
              <View style={[styles.quickActionIcon, { backgroundColor: action.color }]}>
                {renderIcon(action.icon)}
              </View>
              <Text style={styles.quickActionText}>{action.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Upcoming Events */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.eventCard}>
          <View style={styles.eventImagePlaceholder}>
            <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <Rect width="40" height="40" rx="8" fill="#E8E5FF"/>
              <Path d="M20 15V25M15 20H25" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
            </Svg>
          </View>
          <View style={styles.eventInfo}>
            <Text style={styles.eventTitle}>Robotics Workshop</Text>
            <Text style={styles.eventLocation}>Block A, Room LT10</Text>
            <Text style={styles.eventTime}>Today · 2:00 PM</Text>
          </View>
          <Text style={styles.eventArrow}>›</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
          </Svg>
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
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
            <Rect x="3" y="3" width="7" height="7" rx="1" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Rect x="14" y="3" width="7" height="7" rx="1" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Rect x="3" y="14" width="7" height="7" rx="1" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Rect x="14" y="14" width="7" height="7" rx="1" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
          </Svg>
          <Text style={styles.navText}>Activities</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    fontFamily: 'Inter_700Bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  notificationButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#5B4FED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Inter_700Bold',
  },
  classesCard: {
    backgroundColor: '#93C5FD',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  classesIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  classesInfo: {
    flex: 1,
  },
  classesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Inter_600SemiBold',
  },
  classesCount: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
    fontFamily: 'Inter_400Regular',
  },
  viewTimetableButton: {
    paddingVertical: 8,
  },
  viewTimetableText: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'Inter_500Medium',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    paddingHorizontal: 20,
    marginBottom: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 32,
    gap: 12,
  },
  quickActionCard: {
    flex: 1,
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
    fontFamily: 'Inter_500Medium',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  viewAllText: {
    fontSize: 14,
    color: '#5B4FED',
    fontFamily: 'Inter_600SemiBold',
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  eventImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_600SemiBold',
  },
  eventLocation: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 2,
    fontFamily: 'Inter_400Regular',
  },
  eventTime: {
    fontSize: 13,
    color: '#9CA3AF',
    fontFamily: 'Inter_400Regular',
  },
  eventArrow: {
    fontSize: 24,
    color: '#D1D5DB',
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
