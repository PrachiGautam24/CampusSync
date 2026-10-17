import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export default function PrivacySecurityScreen({ navigation }) {
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy & Security</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Privacy Section */}
        <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.settingsCard}>
          <View style={styles.settingItem}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Profile Visibility</Text>
              <Text style={styles.settingSubtext}>Allow others to see your profile</Text>
            </View>
            <Switch
              value={profileVisibility}
              onValueChange={setProfileVisibility}
              trackColor={{ false: '#D1D5DB', true: '#A78BFA' }}
              thumbColor={profileVisibility ? '#5B4FED' : '#F3F4F6'}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Show Email</Text>
              <Text style={styles.settingSubtext}>Display email in your profile</Text>
            </View>
            <Switch
              value={showEmail}
              onValueChange={setShowEmail}
              trackColor={{ false: '#D1D5DB', true: '#A78BFA' }}
              thumbColor={showEmail ? '#5B4FED' : '#F3F4F6'}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Show Phone Number</Text>
              <Text style={styles.settingSubtext}>Display phone in your profile</Text>
            </View>
            <Switch
              value={showPhone}
              onValueChange={setShowPhone}
              trackColor={{ false: '#D1D5DB', true: '#A78BFA' }}
              thumbColor={showPhone ? '#5B4FED' : '#F3F4F6'}
            />
          </View>
        </View>

        {/* Security Section */}
        <Text style={styles.sectionTitle}>Security</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingItem}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M21 12C21 12 18 6 12 6C6 6 3 12 3 12C3 12 6 18 12 18C18 18 21 12 21 12Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            </Svg>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Change Password</Text>
              <Text style={styles.settingSubtext}>Update your password</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <View style={styles.settingItem}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M2 17L12 22L22 17" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M2 12L12 17L22 12" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            </Svg>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Two-Factor Authentication</Text>
              <Text style={styles.settingSubtext}>Add extra security layer</Text>
            </View>
            <Switch
              value={twoFactorAuth}
              onValueChange={setTwoFactorAuth}
              trackColor={{ false: '#D1D5DB', true: '#A78BFA' }}
              thumbColor={twoFactorAuth ? '#5B4FED' : '#F3F4F6'}
            />
          </View>
        </View>

        {/* Data Section */}
        <Text style={styles.sectionTitle}>Data</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingItem}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <Path d="M7 10L12 15L17 10" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M12 15V3" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Download My Data</Text>
              <Text style={styles.settingSubtext}>Get a copy of your data</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingItem, styles.dangerItem]}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M3 6H5H21" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </Svg>
            <View style={styles.settingTextContainer}>
              <Text style={styles.dangerText}>Delete Account</Text>
              <Text style={styles.settingSubtext}>Permanently delete your account</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 12,
    marginTop: 8,
    fontFamily: 'Inter_600SemiBold',
  },
  settingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 4,
    marginBottom: 20,
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
  settingIcon: {
    marginRight: 16,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingText: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter_500Medium',
  },
  settingSubtext: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 2,
    fontFamily: 'Inter_400Regular',
  },
  dangerItem: {
    borderBottomWidth: 0,
  },
  dangerText: {
    fontSize: 16,
    color: '#EF4444',
    fontFamily: 'Inter_500Medium',
  },
});
