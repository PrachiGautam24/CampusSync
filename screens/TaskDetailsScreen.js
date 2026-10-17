import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

export default function TaskDetailsScreen({ route, navigation }) {
  const { task } = route.params;

  const taskDetails = {
    1: {
      description: "I'm facing an issue with my React project. Need help with debugging the API calls.",
      postedBy: {
        name: 'Aarav Mehta',
        role: 'Student · 2nd Year',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      },
    },
    2: {
      description: "Need comprehensive notes for the ECE syllabus. Looking for someone who can share their notes.",
      postedBy: {
        name: 'Priya Sharma',
        role: 'Student · 3rd Year',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      },
    },
    3: {
      description: "Looking for guidance on AI & ML project implementation. Need mentorship on model selection.",
      postedBy: {
        name: 'Rohan Kumar',
        role: 'Student · 4th Year',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      },
    },
  };

  const details = taskDetails[task.id] || taskDetails[1];

  const handleAcceptTask = () => {
    Alert.alert(
      'Task Accepted!',
      'You have accepted this task. You can now message the task creator.',
      [{ text: 'OK' }]
    );
  };

  const handleMessage = () => {
    Alert.alert(
      'Contact Information',
      `Phone: +91 98765 43210\nEmail: ${details.postedBy.name.toLowerCase().replace(' ', '.')}@mru.edu.in\n\nNote: This is a demo. In production, this would open a messaging interface.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Task Details</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Task Header */}
          <View style={styles.taskHeader}>
            <View style={styles.taskIconContainer}>
              <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <Rect x="4" y="4" width="20" height="20" rx="2" stroke="#5B4FED" strokeWidth="2" fill="none"/>
                <Path d="M10 14L13 17L18 12" stroke="#5B4FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <View style={styles.taskHeaderInfo}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text style={styles.taskMeta}>
                <Text style={styles.taskDepartment}>{task.department}</Text>
                <Text style={styles.taskPriorityText}> · {task.priority}</Text>
              </Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.description}>{details.description}</Text>

          {/* Posted By */}
          <View style={styles.postedBySection}>
            <Text style={styles.sectionTitle}>Posted by</Text>
            <View style={styles.userCard}>
              <Image
                source={{ uri: details.postedBy.image }}
                style={styles.userImage}
                resizeMode="cover"
              />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{details.postedBy.name}</Text>
                <Text style={styles.userRole}>{details.postedBy.role}</Text>
              </View>
            </View>
          </View>

          {/* Interested Section */}
          <Text style={styles.interestedTitle}>Interested?</Text>

          {/* Accept Task Button */}
          <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptTask}>
            <Text style={styles.acceptButtonText}>Accept Task</Text>
          </TouchableOpacity>

          {/* Message Button */}
          <TouchableOpacity style={styles.messageButton} onPress={handleMessage}>
            <Text style={styles.messageButtonText}>Message</Text>
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
    padding: 20,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  taskIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  taskHeaderInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 6,
    fontFamily: 'Inter_700Bold',
  },
  taskMeta: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  taskDepartment: {
    color: '#D97706',
  },
  taskPriorityText: {
    color: '#9CA3AF',
  },
  description: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 32,
    fontFamily: 'Inter_400Regular',
  },
  postedBySection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 12,
    fontFamily: 'Inter_500Medium',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_600SemiBold',
  },
  userRole: {
    fontSize: 14,
    color: '#9CA3AF',
    fontFamily: 'Inter_400Regular',
  },
  interestedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  acceptButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  messageButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5B4FED',
    marginBottom: 20,
  },
  messageButtonText: {
    color: '#5B4FED',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
});
