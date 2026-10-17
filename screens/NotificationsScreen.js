import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function NotificationsScreen({ navigation }) {
  const notifications = [
    {
      id: 1,
      type: 'booking',
      title: 'Room Booking Confirmed',
      description: 'A-101 · 11:00 AM – 12:00 PM',
      time: '2m ago',
      iconBg: '#DBEAFE',
      iconColor: '#3B82F6',
    },
    {
      id: 2,
      type: 'event',
      title: 'Event Reminder',
      description: 'Robotics Workshop\nStarts in 1 hour',
      time: '1h ago',
      iconBg: '#FCE7F3',
      iconColor: '#EC4899',
    },
    {
      id: 3,
      type: 'task',
      title: 'Task Accepted',
      description: 'Debugging Assistance\n2h ago',
      time: '3h ago',
      iconBg: '#FCE7F3',
      iconColor: '#EC4899',
    },
    {
      id: 4,
      type: 'lost',
      title: 'Possible Match',
      description: 'Your lost wallet may match...\nView the found item',
      time: '5h ago',
      iconBg: '#FEF3C7',
      iconColor: '#F59E0B',
    },
    {
      id: 5,
      type: 'timetable',
      title: 'Timetable Updated',
      description: 'New schedule available',
      time: '1d ago',
      iconBg: '#E0E7FF',
      iconColor: '#6366F1',
    },
  ];

  const renderIcon = (type, color) => {
    switch (type) {
      case 'booking':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none"/>
            <Path d="M3 10H21" stroke={color} strokeWidth="2"/>
            <Path d="M8 2V6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <Path d="M16 2V6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </Svg>
        );
      case 'event':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none"/>
            <Path d="M9 3V7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <Path d="M15 3V7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <Path d="M3 9H21" stroke={color} strokeWidth="2"/>
            <Path d="M12 13V17" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <Path d="M10 15H14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </Svg>
        );
      case 'task':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none"/>
            <Path d="M9 12L11 14L15 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        );
      case 'lost':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <Path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        );
      case 'timetable':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none"/>
            <Path d="M8 2V6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <Path d="M16 2V6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <Path d="M3 10H21" stroke={color} strokeWidth="2"/>
          </Svg>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} style={styles.notificationCard}>
            <View style={[styles.iconContainer, { backgroundColor: notification.iconBg }]}>
              {renderIcon(notification.type, notification.iconColor)}
            </View>
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
              <Text style={styles.notificationDescription}>{notification.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
            <Circle cx="12" cy="8" r="4" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="#5B4FED" strokeWidth="2"/>
          </Svg>
          <Text style={[styles.navText, styles.navTextActive]}>Profile</Text>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  notificationCard: {
    flexDirection: 'row',
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
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    fontFamily: 'Inter_600SemiBold',
  },
  notificationTime: {
    fontSize: 12,
    color: '#9CA3AF',
    fontFamily: 'Inter_400Regular',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
