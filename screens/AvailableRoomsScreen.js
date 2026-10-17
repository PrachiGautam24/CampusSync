import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function AvailableRoomsScreen({ route, navigation }) {
  const { date, time, block } = route.params;
  const [selectedBlock, setSelectedBlock] = useState('All Blocks');
  const [selectedType, setSelectedType] = useState('All Types');
  const [showBlockPicker, setShowBlockPicker] = useState(false);
  const [showTypePicker, setShowTypePicker] = useState(false);

  const blocks = ['All Blocks', 'Block A', 'Block B', 'Block C'];
  const types = ['All Types', 'Lecture Hall', 'Classroom', 'Lab', 'Seminar Room'];

  const rooms = [
    { id: 1, name: 'A-101', block: 'Block A', type: 'Lecture Hall', available: true },
    { id: 2, name: 'A-102', block: 'Block A', type: 'Classroom', available: true },
    { id: 3, name: 'A-103', block: 'Block A', type: 'Classroom', available: true },
    { id: 4, name: 'B-201', block: 'Block B', type: 'Lab', available: true },
    { id: 5, name: 'B-202', block: 'Block B', type: 'Lab', available: true },
    { id: 6, name: 'C-301', block: 'Block C', type: 'Seminar Room', available: true },
  ];

  const filteredRooms = rooms.filter(room => {
    const blockMatch = selectedBlock === 'All Blocks' || room.block === selectedBlock;
    const typeMatch = selectedType === 'All Types' || room.type === selectedType;
    return blockMatch && typeMatch;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Available Rooms</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Info */}
        <View style={styles.searchInfo}>
          <View style={styles.searchInfoItem}>
            <Text style={styles.searchInfoLabel}>{date}</Text>
            <Text style={styles.searchInfoDivider}>·</Text>
            <Text style={styles.searchInfoLabel}>{time}</Text>
          </View>
        </View>

        {/* Filters */}
        <View style={styles.filtersContainer}>
          <TouchableOpacity 
            style={styles.filterDropdown}
            onPress={() => setShowBlockPicker(true)}
          >
            <Text style={styles.filterText}>{selectedBlock}</Text>
            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <Path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.filterDropdown}
            onPress={() => setShowTypePicker(true)}
          >
            <Text style={styles.filterText}>{selectedType}</Text>
            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <Path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Rooms List */}
        <View style={styles.roomsList}>
          {filteredRooms.map((room) => (
            <View key={room.id} style={styles.roomCard}>
              <View style={styles.roomInfo}>
                <Text style={styles.roomName}>{room.name}</Text>
                <Text style={styles.roomDetails}>{room.block} · {room.type}</Text>
              </View>
              <View style={styles.roomActions}>
                <View style={styles.availableBadge}>
                  <View style={styles.availableDot} />
                  <Text style={styles.availableText}>Available</Text>
                </View>
                <TouchableOpacity 
                  style={styles.bookButton}
                  onPress={() => navigation.navigate('RoomDetails', { 
                    room, 
                    date, 
                    time 
                  })}
                >
                  <Text style={styles.bookButtonText}>Book</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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

        <TouchableOpacity style={styles.navItem}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Path d="M2 17L12 22L22 17" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Path d="M2 12L12 17L22 12" stroke="#5B4FED" strokeWidth="2" fill="none"/>
          </Svg>
          <Text style={[styles.navText, styles.navTextActive]}>Rooms</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
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
            <Circle cx="12" cy="8" r="4" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="#9CA3AF" strokeWidth="2"/>
          </Svg>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>

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
                  setSelectedBlock(b);
                  setShowBlockPicker(false);
                }}
              >
                <Text style={[styles.modalOptionText, selectedBlock === b && styles.modalOptionTextSelected]}>
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

      {/* Type Picker Modal */}
      <Modal visible={showTypePicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Type</Text>
            {types.map((t) => (
              <TouchableOpacity
                key={t}
                style={styles.modalOption}
                onPress={() => {
                  setSelectedType(t);
                  setShowTypePicker(false);
                }}
              >
                <Text style={[styles.modalOptionText, selectedType === t && styles.modalOptionTextSelected]}>
                  {t}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowTypePicker(false)}>
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
  searchInfo: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  searchInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E7FF',
    borderStyle: 'dashed',
  },
  searchInfoLabel: {
    fontSize: 15,
    color: '#1F2937',
    fontFamily: 'Inter_600SemiBold',
  },
  searchInfoDivider: {
    fontSize: 15,
    color: '#9CA3AF',
    marginHorizontal: 8,
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  filterDropdown: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E7FF',
    borderStyle: 'dashed',
  },
  filterText: {
    fontSize: 15,
    color: '#6B7280',
    fontFamily: 'Inter_500Medium',
  },
  roomsList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    gap: 12,
  },
  roomCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E0E7FF',
    borderStyle: 'dashed',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  roomInfo: {
    marginBottom: 16,
  },
  roomName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_700Bold',
  },
  roomDetails: {
    fontSize: 14,
    color: '#9CA3AF',
    fontFamily: 'Inter_400Regular',
  },
  roomActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  availableBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  availableDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  availableText: {
    fontSize: 14,
    color: '#10B981',
    fontFamily: 'Inter_600SemiBold',
  },
  bookButton: {
    backgroundColor: '#5B4FED',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
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
