import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert, Switch } from 'react-native';
import { useState } from 'react';
import Svg, { Path } from 'react-native-svg';

export default function CreateTaskScreen({ navigation }) {
  const [isTeacherTask, setIsTeacherTask] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Technical');
  const [priority, setPriority] = useState('High');
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);

  const categories = ['Academic', 'Technical', 'Admin'];
  const priorities = ['Low', 'Medium', 'High'];

  const handlePostTask = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a task title');
      return;
    }
    if (!description.trim()) {
      Alert.alert('Error', 'Please enter a task description');
      return;
    }

    Alert.alert(
      'Task Posted!',
      'Your task has been successfully posted',
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
        <Text style={styles.headerTitle}>Create a Task</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Teacher Task Toggle */}
        <View style={styles.toggleContainer}>
          <View>
            <Text style={styles.toggleLabel}>Teacher Tasks (Eligible for</Text>
            <Text style={styles.toggleSubLabel}>stipend for contributions)</Text>
          </View>
          <Switch
            value={isTeacherTask}
            onValueChange={setIsTeacherTask}
            trackColor={{ false: '#D1D5DB', true: '#A78BFA' }}
            thumbColor={isTeacherTask ? '#5B4FED' : '#F3F4F6'}
          />
        </View>

        {/* Task Title */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Task Title</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Debugging Assistance"
            placeholderTextColor="#9CA3AF"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        {/* Description */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe the task in detail..."
            placeholderTextColor="#9CA3AF"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
        </View>

        {/* Category */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Category</Text>
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setShowCategoryPicker(true)}
          >
            <Text style={styles.dropdownText}>{category}</Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M5 7.5L10 12.5L15 7.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Priority */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Priority</Text>
          <View style={styles.priorityContainer}>
            {priorities.map((p) => (
              <TouchableOpacity
                key={p}
                style={[
                  styles.priorityButton,
                  priority === p && styles.priorityButtonActive,
                ]}
                onPress={() => setPriority(p)}
              >
                <Text style={[
                  styles.priorityText,
                  priority === p && styles.priorityTextActive,
                ]}>
                  {p}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Post Task Button */}
        <TouchableOpacity style={styles.postButton} onPress={handlePostTask}>
          <Text style={styles.postButtonText}>Post Task</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Category Picker Modal */}
      <Modal visible={showCategoryPicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Category</Text>
            {categories.map((c) => (
              <TouchableOpacity
                key={c}
                style={styles.modalOption}
                onPress={() => {
                  setCategory(c);
                  setShowCategoryPicker(false);
                }}
              >
                <Text style={[
                  styles.modalOptionText,
                  category === c && styles.modalOptionTextSelected,
                ]}>
                  {c}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity 
              style={styles.modalCloseButton} 
              onPress={() => setShowCategoryPicker(false)}
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  toggleLabel: {
    fontSize: 15,
    color: '#9CA3AF',
    fontFamily: 'Inter_500Medium',
  },
  toggleSubLabel: {
    fontSize: 13,
    color: '#D1D5DB',
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
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
  textArea: {
    height: 120,
    paddingTop: 16,
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
  priorityContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  priorityButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  priorityButtonActive: {
    backgroundColor: '#5B4FED',
    borderColor: '#5B4FED',
  },
  priorityText: {
    fontSize: 15,
    color: '#6B7280',
    fontFamily: 'Inter_500Medium',
  },
  priorityTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Inter_600SemiBold',
  },
  postButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  postButtonText: {
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
