import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function ActivityLookupScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Workshops', 'Hackathons', 'Clubs'];

  const activities = [
    {
      id: 1,
      title: 'Robotics Workshop',
      location: 'Block A, LT10',
      time: '2:00 PM',
      date: 'Today',
      dateShort: '20 Oct',
      category: 'Workshops',
      hasImage: false,
      icon: true,
      organizer: 'Robotics Club',
      timeRange: '2:00 PM – 4:00 PM',
      fullDate: '20 Oct 2025',
      description: 'Learn the basics of robotics and build your first robot!',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    },
    {
      id: 2,
      title: 'Hackathon 2025',
      location: 'Block B, Lab',
      time: '10:00 AM',
      date: '22 Oct',
      dateShort: '22 Oct',
      category: 'Hackathons',
      hasImage: true,
      organizer: 'Tech Club',
      timeRange: '10:00 AM – 6:00 PM',
      fullDate: '22 Oct 2025',
      description: '24-hour coding marathon. Build innovative solutions and compete for prizes!',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    },
    {
      id: 3,
      title: 'Design Thinking Workshop',
      location: 'Block C, CSE Lab',
      time: '1:00 PM',
      date: '25 Oct',
      dateShort: '25 Oct',
      category: 'Workshops',
      hasImage: true,
      organizer: 'Innovation Club',
      timeRange: '1:00 PM – 4:00 PM',
      fullDate: '25 Oct 2025',
      description: 'Master the design thinking process and create user-centered solutions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || activity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity Lookup</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles.searchIcon}>
            <Circle cx="9" cy="9" r="6" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Path d="M13 13L17 17" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
          </Svg>
          <TextInput
            style={styles.searchInput}
            placeholder="Search events, workshops..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Category Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Activities List */}
        <View style={styles.activitiesList}>
          {filteredActivities.map((activity) => (
            <TouchableOpacity
              key={activity.id}
              style={styles.activityCard}
              onPress={() => navigation.navigate('ActivityDetails', { activity })}
            >
              <View style={styles.activityIconContainer}>
                {activity.hasImage ? (
                  <Image
                    source={{ uri: activity.image }}
                    style={styles.activityImage}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.activityIconBg}>
                    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <Rect x="4" y="6" width="20" height="16" rx="2" stroke="#5B4FED" strokeWidth="2" fill="none"/>
                      <Path d="M4 10H24" stroke="#5B4FED" strokeWidth="2"/>
                      <Path d="M9 6V14" stroke="#5B4FED" strokeWidth="2"/>
                      <Path d="M19 6V14" stroke="#5B4FED" strokeWidth="2"/>
                    </Svg>
                  </View>
                )}
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityLocation}>
                  {activity.location} · {activity.time}
                </Text>
                <Text style={styles.activityDate}>{activity.date}</Text>
              </View>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path d="M9 18L15 12L9 6" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>
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

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('RoomFinder')}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Path d="M2 17L12 22L22 17" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Path d="M2 12L12 17L22 12" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
          </Svg>
          <Text style={styles.navText}>Rooms</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Rect x="3" y="3" width="7" height="7" rx="1" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Rect x="14" y="3" width="7" height="7" rx="1" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Rect x="3" y="14" width="7" height="7" rx="1" stroke="#5B4FED" strokeWidth="2" fill="none"/>
            <Rect x="14" y="14" width="7" height="7" rx="1" stroke="#5B4FED" strokeWidth="2" fill="none"/>
          </Svg>
          <Text style={[styles.navText, styles.navTextActive]}>Activities</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="8" r="4" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            <Path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="#9CA3AF" strokeWidth="2"/>
          </Svg>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    fontFamily: 'Inter_700Bold',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'Inter_400Regular',
    outlineStyle: 'none',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: '#5B4FED',
    borderColor: '#5B4FED',
  },
  categoryText: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'Inter_500Medium',
  },
  categoryTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Inter_600SemiBold',
  },
  activitiesList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  activityIconContainer: {
    width: 64,
    height: 64,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  activityImage: {
    width: '100%',
    height: '100%',
  },
  activityIconBg: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter_600SemiBold',
  },
  activityLocation: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 4,
    fontFamily: 'Inter_400Regular',
  },
  activityDate: {
    fontSize: 14,
    color: '#5B4FED',
    fontFamily: 'Inter_500Medium',
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
});
