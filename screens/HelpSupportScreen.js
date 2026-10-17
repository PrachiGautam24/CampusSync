import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export default function HelpSupportScreen({ navigation }) {
  const handleContact = (method) => {
    if (method === 'email') {
      Alert.alert(
        'Contact Support',
        'Email: support@campussync.com\n\nIn production, this would open your email client.',
        [{ text: 'OK' }]
      );
    } else if (method === 'phone') {
      Alert.alert(
        'Contact Support',
        'Phone: +91 1800-123-4567\n\nIn production, this would open your phone dialer.',
        [{ text: 'OK' }]
      );
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
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Get Help</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingItem}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Circle cx="12" cy="12" r="9" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M12 17V17.01" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
              <Path d="M12 13.5C12 13.5 14 12 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round"/>
            </Svg>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>FAQs</Text>
              <Text style={styles.settingSubtext}>Find answers to common questions</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            </Svg>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Chat with Us</Text>
              <Text style={styles.settingSubtext}>Get instant help from our team</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M2 17L12 22L22 17" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M2 12L12 17L22 12" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            </Svg>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>User Guide</Text>
              <Text style={styles.settingSubtext}>Learn how to use CampusSync</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Contact Us */}
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => handleContact('email')}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            </Svg>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Email Support</Text>
              <Text style={styles.settingSubtext}>support@campussync.com</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => handleContact('phone')}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.settingIcon}>
              <Path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </Svg>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Phone Support</Text>
              <Text style={styles.settingSubtext}>+91 1800-123-4567</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* About */}
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Terms of Service</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Privacy Policy</Text>
            </View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7 4L13 10L7 16" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingItem, { borderBottomWidth: 0 }]}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>About CampusSync</Text>
              <Text style={styles.settingSubtext}>Version 1.0.0</Text>
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
});
