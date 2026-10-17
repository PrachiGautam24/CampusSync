import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export default function SettingsScreen({ navigation }) {
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Account Section */}
        <Text style={styles.sectionTitle}>Account</Text>
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

          <TouchableOpacity style={[styles.settingItem, styles.lastItem]}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M12 8V12L15 15" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
            </Svg>
            <Text style={styles.settingText}>Privacy & Security</Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingsCard}>
          <View style={styles.settingItem}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <Path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
            <Text style={styles.settingText}>Push Notifications</Text>
            <Switch
              value={pushNotifications}
              onValueChange={setPushNotifications}
              trackColor={{ false: '#D1D5DB', true: '#A78BFA' }}
              thumbColor={pushNotifications ? '#5B4FED' : '#F3F4F6'}
            />
          </View>

          <TouchableOpacity style={[styles.settingItem, styles.lastItem]}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Circle cx="12" cy="12" r="9" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M12 2C13.5 2 15 2.5 16 3.5M12 2C10.5 2 9 2.5 8 3.5M12 2V12M12 22C13.5 22 15 21.5 16 20.5M12 22C10.5 22 9 21.5 8 20.5M2 12H12H22" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
            </Svg>
            <Text style={styles.settingText}>Language</Text>
            <Text style={styles.languageText}>English</Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity style={[styles.settingItem, styles.lastItem]}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Circle cx="12" cy="12" r="9" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M12 17V17.01" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
              <Path d="M12 13.5C12 13.5 14 12 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
            </Svg>
            <Text style={styles.settingText}>Help & Support</Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.logoutIcon}>
            <Path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <Path d="M16 17L21 12L16 7" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M21 12H9" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        {/* Version */}
        <Text style={styles.versionText}>CampusSync · Version 1.0.0</Text>
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
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
    marginTop: 8,
    fontFamily: 'Inter_600SemiBold',
  },
  settingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 4,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  lastItem: {
    borderBottomWidth: 0,
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
  languageText: {
    fontSize: 14,
    color: '#9CA3AF',
    marginRight: 8,
    fontFamily: 'Inter_400Regular',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#FEE2E2',
  },
  logoutIcon: {
    marginRight: 12,
  },
  logoutText: {
    fontSize: 16,
    color: '#EF4444',
    fontFamily: 'Inter_600SemiBold',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
    fontFamily: 'Inter_400Regular',
  },
});
