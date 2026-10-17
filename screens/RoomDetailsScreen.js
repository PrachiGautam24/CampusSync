import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function RoomDetailsScreen({ route, navigation }) {
  const { room, date, time } = route.params;

  const roomDetails = {
    'A-101': {
      capacity: 60,
      type: 'Lecture Hall',
      amenities: ['Smart/LED TV', 'Projector', 'AC', 'WiFi'],
      upcomingClasses: [
        { time: '10:00 AM – 11:00 AM', subject: 'ESD 5', type: 'Lecture' },
        { time: '2:00 PM – 3:00 PM', subject: 'CSE 5A', type: 'Lab' },
      ],
    },
    'A-102': {
      capacity: 40,
      type: 'Classroom',
      amenities: ['Projector', 'AC', 'WiFi'],
      upcomingClasses: [
        { time: '9:00 AM – 10:00 AM', subject: 'Math 101', type: 'Lecture' },
      ],
    },
    'A-103': {
      capacity: 40,
      type: 'Classroom',
      amenities: ['Whiteboard', 'AC', 'WiFi'],
      upcomingClasses: [],
    },
    'B-201': {
      capacity: 30,
      type: 'Lab',
      amenities: ['Computers', 'Projector', 'AC', 'WiFi'],
      upcomingClasses: [
        { time: '1:00 PM – 3:00 PM', subject: 'CSE Lab', type: 'Lab' },
      ],
    },
    'B-202': {
      capacity: 30,
      type: 'Lab',
      amenities: ['Computers', 'AC', 'WiFi'],
      upcomingClasses: [],
    },
    'C-301': {
      capacity: 25,
      type: 'Seminar Room',
      amenities: ['Smart TV', 'AC', 'WiFi', 'Video Conference'],
      upcomingClasses: [],
    },
  };

  const details = roomDetails[room.name] || roomDetails['A-101'];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Room Image with Back Button */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80' }}
            style={styles.roomImage}
            resizeMode="cover"
          />
          
          {/* Overlay Buttons */}
          <TouchableOpacity 
            style={styles.backButtonOverlay}
            onPress={() => navigation.goBack()}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookmarkButton}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Room Info */}
        <View style={styles.content}>
          <Text style={styles.roomName}>{room.name}</Text>
          <Text style={styles.roomLocation}>{room.block} · {details.type}</Text>

          {/* Capacity and Type */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Circle cx="10" cy="7" r="3" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <Path d="M4 17C4 14.2386 6.23858 12 9 12H11C13.7614 12 16 14.2386 16 17" stroke="#6B7280" strokeWidth="1.5"/>
              </Svg>
              <View>
                <Text style={styles.infoLabel}>Capacity</Text>
                <Text style={styles.infoValue}>{details.capacity}</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path d="M3 3H17V17H3V3Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <Path d="M3 8H17" stroke="#6B7280" strokeWidth="1.5"/>
                <Path d="M8 3V17" stroke="#6B7280" strokeWidth="1.5"/>
              </Svg>
              <View>
                <Text style={styles.infoLabel}>Type</Text>
                <Text style={styles.infoValue}>{details.type}</Text>
              </View>
            </View>
          </View>

          {/* Amenities */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Circle cx="10" cy="10" r="7" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <Path d="M10 7V10L12 12" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
              </Svg>
              <Text style={styles.sectionTitle}>Amenities</Text>
            </View>
            <Text style={styles.amenitiesText}>{details.amenities.join(' · ')}</Text>
          </View>

          {/* Upcoming Classes */}
          {details.upcomingClasses.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Upcoming Classes</Text>
              {details.upcomingClasses.map((classItem, index) => (
                <View key={index} style={styles.classItem}>
                  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <Rect x="3" y="4" width="14" height="13" rx="2" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                    <Path d="M3 8H17" stroke="#6B7280" strokeWidth="1.5"/>
                    <Path d="M7 2V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                    <Path d="M13 2V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                  </Svg>
                  <View style={styles.classInfo}>
                    <Text style={styles.classTime}>{classItem.time}</Text>
                    <Text style={styles.classSubject}>{classItem.subject} · {classItem.type}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Book Room Button */}
          <TouchableOpacity 
            style={styles.bookRoomButton}
            onPress={() => navigation.navigate('ConfirmBooking', { room, date, time, details })}
          >
            <Text style={styles.bookRoomButtonText}>Book Room</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
  },
  roomImage: {
    width: '100%',
    height: '100%',
  },
  backButtonOverlay: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookmarkButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    padding: 20,
  },
  roomName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_700Bold',
  },
  roomLocation: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 24,
    fontFamily: 'Inter_400Regular',
  },
  infoRow: {
    flexDirection: 'row',
    gap: 40,
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
    fontFamily: 'Inter_400Regular',
  },
  infoValue: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter_600SemiBold',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
    fontFamily: 'Inter_600SemiBold',
  },
  amenitiesText: {
    fontSize: 15,
    color: '#9CA3AF',
    lineHeight: 22,
    fontFamily: 'Inter_400Regular',
  },
  classItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    marginBottom: 8,
  },
  classInfo: {
    flex: 1,
  },
  classTime: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
    fontFamily: 'Inter_600SemiBold',
  },
  classSubject: {
    fontSize: 13,
    color: '#6B7280',
    fontFamily: 'Inter_400Regular',
  },
  bookRoomButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  bookRoomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
});
