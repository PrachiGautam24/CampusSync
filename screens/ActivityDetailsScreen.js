import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function ActivityDetailsScreen({ route, navigation }) {
  const { activity } = route.params;

  const handleAddToCalendar = () => {
    Alert.alert(
      'Added to Calendar',
      `${activity.title} has been added to your calendar`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Activity Image with Back and Share Buttons */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: activity.image }}
            style={styles.activityImage}
            resizeMode="cover"
          />
          
          {/* Overlay Buttons */}
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Circle cx="18" cy="5" r="3" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Circle cx="6" cy="12" r="3" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Circle cx="18" cy="19" r="3" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="#5B4FED" strokeWidth="2"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Activity Details */}
        <View style={styles.content}>
          <Text style={styles.activityTitle}>{activity.title}</Text>

          {/* Date & Time */}
          <View style={styles.detailRow}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Rect x="3" y="4" width="14" height="13" rx="2" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M3 8H17" stroke="#6B7280" strokeWidth="1.5"/>
              <Path d="M7 2V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
              <Path d="M13 2V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </Svg>
            <Text style={styles.detailText}>
              {activity.fullDate} · {activity.timeRange}
            </Text>
          </View>

          {/* Location */}
          <View style={styles.detailRow}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M10 2C7.23858 2 5 4.23858 5 7C5 11 10 18 10 18C10 18 15 11 15 7C15 4.23858 12.7614 2 10 2Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
            </Svg>
            <Text style={styles.detailText}>
              {activity.location}
            </Text>
          </View>

          {/* Organizer */}
          <View style={styles.detailRow}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Circle cx="10" cy="7" r="3" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M4 17C4 14.2386 6.23858 12 9 12H11C13.7614 12 16 14.2386 16 17" stroke="#6B7280" strokeWidth="1.5"/>
            </Svg>
            <Text style={styles.detailText}>
              Organized by: {activity.organizer}
            </Text>
          </View>

          {/* Description */}
          <Text style={styles.description}>{activity.description}</Text>

          {/* Add to Calendar Button */}
          <TouchableOpacity 
            style={styles.addToCalendarButton}
            onPress={handleAddToCalendar}
          >
            <Text style={styles.addToCalendarButtonText}>Add to Calendar</Text>
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
    height: 280,
  },
  activityImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
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
  shareButton: {
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
    padding: 24,
  },
  activityTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 24,
    fontFamily: 'Inter_700Bold',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  detailText: {
    fontSize: 15,
    color: '#6B7280',
    fontFamily: 'Inter_400Regular',
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: '#9CA3AF',
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 32,
    fontFamily: 'Inter_400Regular',
  },
  addToCalendarButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  addToCalendarButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
});
