import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

export default function MyProfileScreen({ navigation }) {
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
        <View style={styles.profilePictureContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' }}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        {/* Name */}
        <Text style={styles.profileName}>Prachi Gautam</Text>
        
        {/* Role Badge */}
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>Student · FSD 5</Text>
        </View>

        {/* Profile Details */}
        <View style={styles.detailsCard}>
          {/* College Email */}
          <View style={styles.detailItem}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles.detailIcon}>
              <Rect x="2" y="4" width="16" height="12" rx="2" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M2 6L10 11L18 6" stroke="#6B7280" strokeWidth="1.5"/>
            </Svg>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>College Email ID</Text>
              <Text style={styles.detailValue}>prachi.gautam@mru.edu.in</Text>
            </View>
          </View>

          {/* University */}
          <View style={styles.detailItem}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles.detailIcon}>
              <Path d="M10 2L2 6L10 10L18 6L10 2Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M2 14L10 18L18 14" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M2 10L10 14L18 10" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
            </Svg>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>University</Text>
              <Text style={styles.detailValue}>Manav Rachna University</Text>
            </View>
          </View>

          {/* Department */}
          <View style={[styles.detailItem, styles.lastDetailItem]}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles.detailIcon}>
              <Rect x="3" y="3" width="14" height="14" rx="2" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M7 3V7" stroke="#6B7280" strokeWidth="1.5"/>
              <Path d="M13 3V7" stroke="#6B7280" strokeWidth="1.5"/>
              <Path d="M3 8H17" stroke="#6B7280" strokeWidth="1.5"/>
            </Svg>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Department</Text>
              <Text style={styles.detailValue}>Computer Science & Engineering</Text>
            </View>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  profilePictureContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
    fontFamily: 'Inter_700Bold',
  },
  roleBadge: {
    backgroundColor: '#EDE9FE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 32,
  },
  roleText: {
    fontSize: 14,
    color: '#5B4FED',
    fontFamily: 'Inter_600SemiBold',
  },
  detailsCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  lastDetailItem: {
    borderBottomWidth: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  detailIcon: {
    marginRight: 16,
    marginTop: 2,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 4,
    fontFamily: 'Inter_500Medium',
  },
  detailValue: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter_400Regular',
  },
  editButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
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
