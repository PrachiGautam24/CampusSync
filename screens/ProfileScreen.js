import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile & Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' }}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <Text style={styles.profileName}>Prachi Gautam</Text>
          <Text style={styles.profileRole}>FSD 5 · Student</Text>
        </View>

        {/* Settings Options */}
        <View style={styles.settingsCard}>
          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => navigation.navigate('MyProfile')}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Circle cx="12" cy="8" r="4" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="#5B4FED" strokeWidth="2"/>
            </Svg>
            <Text style={styles.settingText}>Personal Information</Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.settingItem, styles.lastItem]}
            onPress={() => navigation.navigate('Settings')}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Circle cx="12" cy="12" r="3" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
            </Svg>
            <Text style={styles.settingText}>Settings</Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>
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

        <TouchableOpacity style={styles.navItem}>
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
    paddingTop: 24,
    paddingBottom: 100,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#E0E7FF',
    borderStyle: 'dashed',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_700Bold',
  },
  profileRole: {
    fontSize: 14,
    color: '#9CA3AF',
    fontFamily: 'Inter_400Regular',
  },
  settingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 4,
    borderWidth: 2,
    borderColor: '#E0E7FF',
    borderStyle: 'dashed',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingIcon: {
    marginRight: 16,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter_500Medium',
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  logoutText: {
    flex: 1,
    fontSize: 16,
    color: '#EF4444',
    fontFamily: 'Inter_500Medium',
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
