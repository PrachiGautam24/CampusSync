import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export default function PersonalInfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Profile Picture */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' }}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <Text style={styles.profileName}>Prachi Gautam</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleText}>Student · FSD 5</Text>
          </View>
        </View>

        {/* Info Cards */}
        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M3 6L10 2L17 6V14C17 14.5304 16.7893 15.0391 16.4142 15.4142C16.0391 15.7893 15.5304 16 15 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M3 6L10 11L17 6" stroke="#6B7280" strokeWidth="1.5"/>
            </Svg>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>College Email ID</Text>
            <Text style={styles.infoValue}>prachi.gautam@mru.edu.in</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M10 6V10L13 13" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </Svg>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>University</Text>
            <Text style={styles.infoValue}>Manav Rachna University</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M4 6H16M4 6V16C4 16.5523 4.44772 17 5 17H15C15.5523 17 16 16.5523 16 16V6M4 6L6 3H14L16 6" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M8 10H12" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </Svg>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Department</Text>
            <Text style={styles.infoValue}>Computer Science & Engineering</Text>
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
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
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    fontFamily: 'Inter_700Bold',
  },
  roleBadge: {
    backgroundColor: '#EDE9FE',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  roleText: {
    fontSize: 14,
    color: '#5B4FED',
    fontFamily: 'Inter_600SemiBold',
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 4,
    fontFamily: 'Inter_500Medium',
  },
  infoValue: {
    fontSize: 15,
    color: '#1F2937',
    fontFamily: 'Inter_600SemiBold',
  },
  editButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#5B4FED',
  },
  editButtonText: {
    color: '#5B4FED',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
});
