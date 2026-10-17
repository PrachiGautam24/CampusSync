import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { useBookings } from '../BookingContext';

export default function RoomFinderScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('find'); // 'find' or 'bookings'
  const [bookingTab, setBookingTab] = useState('upcoming'); // 'upcoming' or 'past'
  const [date, setDate] = useState('Mon, 20 Oct');
  const [time, setTime] = useState('10:00 AM – 12:00 PM');
  const [block, setBlock] = useState('All Blocks');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showBlockPicker, setShowBlockPicker] = useState(false);

  const { getUpcomingBookings, getPastBookings } = useBookings();

  const dates = ['Mon, 20 Oct', 'Tue, 21 Oct', 'Wed, 22 Oct', 'Thu, 23 Oct', 'Fri, 24 Oct'];
  const times = ['9:00 AM – 11:00 AM', '10:00 AM – 12:00 PM', '12:00 PM – 2:00 PM', '2:00 PM – 4:00 PM', '4:00 PM – 6:00 PM'];
  const blocks = ['All Blocks', 'Block A', 'Block B', 'Block C'];

  const handleSearch = () => {
    // Navigate to available rooms with search params
    navigation.navigate('AvailableRooms', {
      date,
      time,
      block,
    });
  };

  const upcomingBookings = getUpcomingBookings();
  const pastBookings = getPastBookings();

  const bookings = bookingTab === 'upcoming' ? upcomingBookings : pastBookings;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Room Finder</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'find' && styles.tabActive]}
          onPress={() => setActiveTab('find')}
        >
          <Text style={[styles.tabText, activeTab === 'find' && styles.tabTextActive]}>
            Find Room
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'bookings' && styles.tabActive]}
          onPress={() => setActiveTab('bookings')}
        >
          <Text style={[styles.tabText, activeTab === 'bookings' && styles.tabTextActive]}>
            My Bookings
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {activeTab === 'find' ? (
          // Find Room Tab
          <View style={styles.findRoomContainer}>
            {/* Date Field */}
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowDatePicker(true)}>
              <Text style={styles.inputText}>{date}</Text>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Rect x="3" y="4" width="14" height="13" rx="2" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
                <Path d="M3 8H17" stroke="#9CA3AF" strokeWidth="1.5"/>
                <Path d="M7 2V6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
                <Path d="M13 2V6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
              </Svg>
            </TouchableOpacity>

            {/* Time Field */}
            <Text style={styles.label}>Time</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowTimePicker(true)}>
              <Text style={styles.inputText}>{time}</Text>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Circle cx="10" cy="10" r="7" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
                <Path d="M10 6V10L13 13" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
              </Svg>
            </TouchableOpacity>

            {/* Building / Block Field */}
            <Text style={styles.label}>Building / Block</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowBlockPicker(true)}>
              <Text style={styles.inputText}>{block}</Text>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path d="M5 7L10 10L15 7M5 7L10 4L15 7M5 7V13L10 16M15 7V13L10 16M10 10V16" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
              </Svg>
            </TouchableOpacity>

            {/* Search Button */}
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // My Bookings Tab
          <View style={styles.bookingsContainer}>
            {/* Upcoming/Past Tabs */}
            <View style={styles.bookingStatusTabs}>
              <TouchableOpacity 
                style={bookingTab === 'upcoming' ? styles.bookingStatusTabActive : styles.bookingStatusTab}
                onPress={() => setBookingTab('upcoming')}
              >
                <Text style={bookingTab === 'upcoming' ? styles.bookingStatusTabTextActive : styles.bookingStatusTabText}>
                  Upcoming
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={bookingTab === 'past' ? styles.bookingStatusTabActive : styles.bookingStatusTab}
                onPress={() => setBookingTab('past')}
              >
                <Text style={bookingTab === 'past' ? styles.bookingStatusTabTextActive : styles.bookingStatusTabText}>
                  Past
                </Text>
              </TouchableOpacity>
            </View>

            {/* Bookings List */}
            {bookings.map((booking) => (
              <TouchableOpacity key={booking.id} style={styles.bookingCard}>
                <View style={[styles.bookingIcon, { backgroundColor: booking.iconBg }]}>
                  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Rect x="4" y="6" width="16" height="14" rx="2" stroke="#0EA5E9" strokeWidth="2" fill="none"/>
                    <Path d="M8 2V6" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
                    <Path d="M16 2V6" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
                    <Path d="M4 10H20" stroke="#0EA5E9" strokeWidth="2"/>
                  </Svg>
                </View>
                <View style={styles.bookingInfo}>
                  <Text style={styles.bookingRoom}>{booking.room}</Text>
                  <Text style={styles.bookingDetails}>{booking.date} · {booking.time}</Text>
                  <Text style={styles.bookingPurpose}>{booking.purpose}</Text>
                  <View style={[styles.statusBadge, { backgroundColor: `${booking.statusColor}20` }]}>
                    <Text style={[styles.statusText, { color: booking.statusColor }]}>
                      {booking.status}
                    </Text>
                  </View>
                </View>
                <Text style={styles.bookingArrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
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

        <TouchableOpacity style={styles.navItem}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Path d="M2 17L12 22L22 17" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Path d="M2 12L12 17L22 12" stroke="#5B4FED" strokeWidth="2" fill="none"/>
          </Svg>
          <Text style={[styles.navText, styles.navTextActive]}>Rooms</Text>
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
            <Circle cx="12" cy="8" r="4" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="#9CA3AF" strokeWidth="2"/>
          </Svg>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Date Picker Modal */}
      <Modal visible={showDatePicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Date</Text>
            {dates.map((d) => (
              <TouchableOpacity
                key={d}
                style={styles.modalOption}
                onPress={() => {
                  setDate(d);
                  setShowDatePicker(false);
                }}
              >
                <Text style={[styles.modalOptionText, date === d && styles.modalOptionTextSelected]}>
                  {d}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowDatePicker(false)}>
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Time Picker Modal */}
      <Modal visible={showTimePicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Time</Text>
            {times.map((t) => (
              <TouchableOpacity
                key={t}
                style={styles.modalOption}
                onPress={() => {
                  setTime(t);
                  setShowTimePicker(false);
                }}
              >
                <Text style={[styles.modalOptionText, time === t && styles.modalOptionTextSelected]}>
                  {t}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowTimePicker(false)}>
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Block Picker Modal */}
      <Modal visible={showBlockPicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Block</Text>
            {blocks.map((b) => (
              <TouchableOpacity
                key={b}
                style={styles.modalOption}
                onPress={() => {
                  setBlock(b);
                  setShowBlockPicker(false);
                }}
              >
                <Text style={[styles.modalOptionText, block === b && styles.modalOptionTextSelected]}>
                  {b}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowBlockPicker(false)}>
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    fontFamily: 'Inter_700Bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  tabActive: {
    backgroundColor: '#F3F4F6',
    borderBottomWidth: 3,
    borderBottomColor: '#5B4FED',
  },
  tabText: {
    fontSize: 15,
    color: '#9CA3AF',
    fontFamily: 'Inter_500Medium',
  },
  tabTextActive: {
    color: '#5B4FED',
    fontFamily: 'Inter_600SemiBold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  findRoomContainer: {
    paddingBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
    fontFamily: 'Inter_600SemiBold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  inputText: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter_400Regular',
  },
  searchButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  bookingsContainer: {
    paddingBottom: 24,
  },
  bookingStatusTabs: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 8,
  },
  bookingStatusTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  bookingStatusTabActive: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#5B4FED',
  },
  bookingStatusTabText: {
    fontSize: 15,
    color: '#6B7280',
    fontFamily: 'Inter_500Medium',
  },
  bookingStatusTabTextActive: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Inter_600SemiBold',
  },
  bookingCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  bookingIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bookingInfo: {
    flex: 1,
  },
  bookingRoom: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_600SemiBold',
  },
  bookingDetails: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 4,
    fontFamily: 'Inter_400Regular',
  },
  bookingPurpose: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
    fontFamily: 'Inter_400Regular',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  bookingArrow: {
    fontSize: 24,
    color: '#D1D5DB',
  },
  bottomNav: {
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '70%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
    fontFamily: 'Inter_700Bold',
  },
  modalOption: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#6B7280',
    fontFamily: 'Inter_400Regular',
  },
  modalOptionTextSelected: {
    color: '#5B4FED',
    fontFamily: 'Inter_600SemiBold',
  },
  modalCloseButton: {
    marginTop: 12,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: '#6B7280',
    fontFamily: 'Inter_600SemiBold',
  },
});
