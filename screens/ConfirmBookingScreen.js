import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { useBookings } from '../BookingContext';

export default function ConfirmBookingScreen({ route, navigation }) {
  const { room, date, time, details } = route.params;
  const [selectedPurpose, setSelectedPurpose] = useState('Study / Group Work');
  const [showPurposePicker, setShowPurposePicker] = useState(false);
  const { addBooking } = useBookings();

  const purposes = [
    'Study / Group Work',
    'Project Discussion',
    'Meeting',
    'Presentation Practice',
    'Workshop',
    'Other',
  ];

  const handleConfirmBooking = () => {
    // Add booking to context
    addBooking({
      room: room.name,
      date,
      time,
      purpose: selectedPurpose,
    });

    Alert.alert(
      'Booking Confirmed!',
      `Room ${room.name} has been booked for ${selectedPurpose}`,
      [
        {
          text: 'View Bookings',
          onPress: () => navigation.navigate('RoomFinder'),
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Dashboard'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Confirm Booking</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Room Info Card */}
        <View style={styles.roomCard}>
          <View style={styles.roomIconContainer}>
            <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <Rect x="4" y="6" width="20" height="16" rx="2" stroke="#5B4FED" strokeWidth="2" fill="none"/>
              <Path d="M4 10H24" stroke="#5B4FED" strokeWidth="2"/>
              <Path d="M14 6V22" stroke="#5B4FED" strokeWidth="2"/>
            </Svg>
          </View>
          <View style={styles.roomCardInfo}>
            <Text style={styles.roomCardName}>{room.name}</Text>
            <Text style={styles.roomCardDetails}>{room.block} · {details.type}</Text>
          </View>
        </View>

        {/* Booking Details */}
        <View style={styles.bookingDetails}>
          <View style={styles.detailItem}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Circle cx="10" cy="10" r="7" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M10 6V10L13 13" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </Svg>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>{date}</Text>
              <Text style={styles.detailTime}>{time}</Text>
              <Text style={styles.detailNote}>Ends before next lecture (12:00 PM)</Text>
            </View>
          </View>
        </View>

        {/* Purpose Selection */}
        <View style={styles.purposeSection}>
          <Text style={styles.purposeLabel}>Purpose</Text>
          <TouchableOpacity 
            style={styles.purposeDropdown}
            onPress={() => setShowPurposePicker(!showPurposePicker)}
          >
            <Text style={styles.purposeText}>{selectedPurpose}</Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M5 7.5L10 12.5L15 7.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          {/* Purpose Options */}
          {showPurposePicker && (
            <View style={styles.purposeOptions}>
              {purposes.map((purpose, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.purposeOption,
                    selectedPurpose === purpose && styles.purposeOptionSelected,
                  ]}
                  onPress={() => {
                    setSelectedPurpose(purpose);
                    setShowPurposePicker(false);
                  }}
                >
                  <Text style={[
                    styles.purposeOptionText,
                    selectedPurpose === purpose && styles.purposeOptionTextSelected,
                  ]}>
                    {purpose}
                  </Text>
                  {selectedPurpose === purpose && (
                    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <Path d="M16 6L7.5 14.5L4 11" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Confirm Button */}
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleConfirmBooking}
        >
          <Text style={styles.confirmButtonText}>Confirm Booking</Text>
        </TouchableOpacity>

        {/* Disclaimer */}
        <Text style={styles.disclaimer}>
          Booking is subject to timetable and availability rules.
        </Text>
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
  roomCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  roomIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  roomCardInfo: {
    flex: 1,
  },
  roomCardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_700Bold',
  },
  roomCardDetails: {
    fontSize: 14,
    color: '#9CA3AF',
    fontFamily: 'Inter_400Regular',
  },
  bookingDetails: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_600SemiBold',
  },
  detailTime: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    fontFamily: 'Inter_400Regular',
  },
  detailNote: {
    fontSize: 13,
    color: '#10B981',
    fontFamily: 'Inter_500Medium',
  },
  purposeSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  purposeLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
    fontFamily: 'Inter_600SemiBold',
  },
  purposeDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  purposeText: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter_400Regular',
  },
  purposeOptions: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  purposeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  purposeOptionSelected: {
    backgroundColor: '#F9FAFB',
  },
  purposeOptionText: {
    fontSize: 15,
    color: '#6B7280',
    fontFamily: 'Inter_400Regular',
  },
  purposeOptionTextSelected: {
    color: '#5B4FED',
    fontFamily: 'Inter_600SemiBold',
  },
  confirmButton: {
    backgroundColor: '#5B4FED',
    marginHorizontal: 20,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
    paddingHorizontal: 40,
    marginBottom: 40,
    fontFamily: 'Inter_400Regular',
  },
});
