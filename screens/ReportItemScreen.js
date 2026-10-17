import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function ReportItemScreen({ navigation }) {
  const [reportType, setReportType] = useState('Lost'); // 'Lost' or 'Found'
  const [itemName, setItemName] = useState('');
  const [location, setLocation] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const locations = ['Block A', 'Block B', 'Block C', 'Library', 'Cafeteria', 'Sports Complex', 'Parking Lot'];
  const dateTimes = ['Today, 9:00 AM', 'Today, 11:00 AM', 'Today, 2:00 PM', 'Yesterday, 3:00 PM', 'Oct 19, 10:00 AM'];

  const handleSubmit = () => {
    if (!itemName.trim()) {
      Alert.alert('Error', 'Please enter an item name');
      return;
    }
    if (!location) {
      Alert.alert('Error', 'Please select a location');
      return;
    }
    if (!dateTime) {
      Alert.alert('Error', 'Please select date & time');
      return;
    }

    const message = reportType === 'Lost' 
      ? 'Your lost item report has been submitted. All users will be notified to help find your item.'
      : 'Your found item report has been submitted. The owner will be notified if a match is found.';

    Alert.alert(
      'Report Submitted!',
      message,
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
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
        <Text style={styles.headerTitle}>Report Item</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Type Selection */}
        <View style={styles.typeContainer}>
          <TouchableOpacity
            style={[styles.typeButton, reportType === 'Lost' && styles.typeButtonActive]}
            onPress={() => setReportType('Lost')}
          >
            <Text style={[styles.typeText, reportType === 'Lost' && styles.typeTextActive]}>
              Lost
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.typeButton, reportType === 'Found' && styles.typeButtonActive]}
            onPress={() => setReportType('Found')}
          >
            <Text style={[styles.typeText, reportType === 'Found' && styles.typeTextActive]}>
              Found
            </Text>
          </TouchableOpacity>
        </View>

        {/* Add Photo */}
        <TouchableOpacity style={styles.photoContainer}>
          <View style={styles.photoIcon}>
            <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <Rect x="4" y="6" width="24" height="20" rx="2" stroke="#C7D2FE" strokeWidth="2" fill="none"/>
              <Circle cx="12" cy="13" r="3" stroke="#C7D2FE" strokeWidth="2" fill="none"/>
              <Path d="M4 22L10 16L16 22" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M16 18L20 14L28 22" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
          <Text style={styles.photoText}>Add Photo (optional)</Text>
        </TouchableOpacity>

        {/* Item Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Item Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Black Wallet"
            placeholderTextColor="#C7D2FE"
            value={itemName}
            onChangeText={setItemName}
          />
        </View>

        {/* Location */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Location</Text>
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setShowLocationPicker(true)}
          >
            <Text style={[styles.dropdownText, !location && styles.placeholderText]}>
              {location || 'Select Location'}
            </Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M5 7.5L10 12.5L15 7.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Date & Time */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date & Time</Text>
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setShowDateTimePicker(true)}
          >
            <Text style={[styles.dropdownText, !dateTime && styles.placeholderText]}>
              {dateTime || 'Select Date & Time'}
            </Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Rect x="3" y="4" width="14" height="13" rx="2" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
              <Path d="M3 8H17" stroke="#6B7280" strokeWidth="1.5"/>
              <Path d="M7 2V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
              <Path d="M13 2V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Location Picker Modal */}
      <Modal visible={showLocationPicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Location</Text>
            {locations.map((loc) => (
              <TouchableOpacity
                key={loc}
                style={styles.modalOption}
                onPress={() => {
                  setLocation(loc);
                  setShowLocationPicker(false);
                }}
              >
                <Text style={[
                  styles.modalOptionText,
                  location === loc && styles.modalOptionTextSelected,
                ]}>
                  {loc}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity 
              style={styles.modalCloseButton} 
              onPress={() => setShowLocationPicker(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Date Time Picker Modal */}
      <Modal visible={showDateTimePicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Date & Time</Text>
            {dateTimes.map((dt) => (
              <TouchableOpacity
                key={dt}
                style={styles.modalOption}
                onPress={() => {
                  setDateTime(dt);
                  setShowDateTimePicker(false);
                }}
              >
                <Text style={[
                  styles.modalOptionText,
                  dateTime === dt && styles.modalOptionTextSelected,
                ]}>
                  {dt}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity 
              style={styles.modalCloseButton} 
              onPress={() => setShowDateTimePicker(false)}
            >
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
  typeContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  typeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  typeButtonActive: {
    backgroundColor: '#5B4FED',
    borderColor: '#5B4FED',
  },
  typeText: {
    fontSize: 16,
    color: '#6B7280',
    fontFamily: 'Inter_500Medium',
  },
  typeTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Inter_600SemiBold',
  },
  photoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#E0E7FF',
    borderStyle: 'dashed',
  },
  photoIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  photoText: {
    fontSize: 14,
    color: '#A5B4FC',
    fontFamily: 'Inter_500Medium',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 8,
    fontFamily: 'Inter_600SemiBold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1F2937',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontFamily: 'Inter_400Regular',
    outlineStyle: 'none',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  dropdownText: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter_400Regular',
  },
  placeholderText: {
    color: '#C7D2FE',
  },
  submitButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
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
