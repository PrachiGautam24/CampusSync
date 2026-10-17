import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function ItemDetailsScreen({ route, navigation }) {
  const { item } = route.params;

  const itemDetails = {
    1: {
      description: 'Black leather wallet found near the entrance of Block A. Contains some cards and cash.',
      foundBy: {
        name: 'Rahul Verma',
        role: 'Student · 3rd Year',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
        phone: '+91 98765 43210',
        email: 'rahul.verma@mru.edu.in',
      },
      details: {
        color: 'Black',
        brand: 'Unknown',
        condition: 'Good',
      },
    },
    2: {
      description: 'Blue backpack lost near Block B. Contains textbooks and a laptop. Brand: Nike',
      foundBy: {
        name: 'Prachi Gautam',
        role: 'Student · FSD 5',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        phone: '+91 98765 43211',
        email: 'prachi.gautam@mru.edu.in',
      },
      details: {
        color: 'Blue',
        brand: 'Nike',
        condition: 'New',
      },
    },
    3: {
      description: 'AirPods found in the library reading area. White color, appears to be in good condition.',
      foundBy: {
        name: 'Arjun Singh',
        role: 'Student · 2nd Year',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
        phone: '+91 98765 43212',
        email: 'arjun.singh@mru.edu.in',
      },
      details: {
        color: 'White',
        brand: 'Apple',
        condition: 'Excellent',
      },
    },
  };

  const details = itemDetails[item.id] || itemDetails[1];

  const handleContact = () => {
    Alert.alert(
      'Contact Information',
      `Name: ${details.foundBy.name}\nPhone: ${details.foundBy.phone}\nEmail: ${details.foundBy.email}\n\nNote: You can contact directly via phone or email.`,
      [
        { text: 'Call', onPress: () => Alert.alert('Demo', 'In production, this would open the phone dialer') },
        { text: 'Email', onPress: () => Alert.alert('Demo', 'In production, this would open the email client') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleClaimItem = () => {
    Alert.alert(
      'Claim Item',
      'Are you sure you want to claim this item? The finder will be notified.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes, Claim',
          onPress: () => {
            Alert.alert(
              'Claim Submitted!',
              `Your claim has been submitted. ${details.foundBy.name} will be notified and will contact you to verify ownership.`,
              [{ text: 'OK', onPress: () => navigation.goBack() }]
            );
          },
        },
      ]
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
          <Text style={styles.headerTitle}>Item Details</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Item Header */}
          <View style={styles.itemHeader}>
            <View style={styles.itemIconContainer}>
              {item.icon === 'wallet' && (
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <Rect x="4" y="6" width="24" height="20" rx="2" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                  <Path d="M4 12H28" stroke="#F59E0B" strokeWidth="2"/>
                  <Circle cx="20" cy="18" r="2" fill="#F59E0B"/>
                </Svg>
              )}
              {item.icon === 'backpack' && (
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <Path d="M8 8C8 5.79086 9.79086 4 12 4H20C22.2091 4 24 5.79086 24 8V28H8V8Z" stroke="#EC4899" strokeWidth="2" fill="none"/>
                  <Path d="M8 14H24" stroke="#EC4899" strokeWidth="2"/>
                  <Path d="M12 4V10" stroke="#EC4899" strokeWidth="2" strokeLinecap="round"/>
                  <Path d="M20 4V10" stroke="#EC4899" strokeWidth="2" strokeLinecap="round"/>
                </Svg>
              )}
              {item.icon === 'airpods' && (
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <Path d="M8 8C8 6.34315 9.34315 5 11 5C12.6569 5 14 6.34315 14 8V20C14 21.6569 12.6569 23 11 23C9.34315 23 8 21.6569 8 20V8Z" stroke="#6366F1" strokeWidth="2" fill="none"/>
                  <Path d="M24 8C24 6.34315 22.6569 5 21 5C19.3431 5 18 6.34315 18 8V20C18 21.6569 19.3431 23 21 23C22.6569 23 24 21.6569 24 20V8Z" stroke="#6366F1" strokeWidth="2" fill="none"/>
                </Svg>
              )}
            </View>
            <View style={styles.itemHeaderInfo}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemMeta}>
                <Text style={item.status === 'Found' ? styles.foundTextBold : styles.lostTextBold}>
                  {item.status}
                </Text>
                {' · '}{item.location} · {item.time}
              </Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.description}>{details.description}</Text>

          {/* Item Details */}
          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Item Details</Text>
            <View style={styles.detailsGrid}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Color</Text>
                <Text style={styles.detailValue}>{details.details.color}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Brand</Text>
                <Text style={styles.detailValue}>{details.details.brand}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Condition</Text>
                <Text style={styles.detailValue}>{details.details.condition}</Text>
              </View>
            </View>
          </View>

          {/* Found/Lost By */}
          <View style={styles.postedBySection}>
            <Text style={styles.sectionTitle}>
              {item.status === 'Found' ? 'Found by' : 'Lost by'}
            </Text>
            <View style={styles.userCard}>
              <Image
                source={{ uri: details.foundBy.image }}
                style={styles.userImage}
                resizeMode="cover"
              />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{details.foundBy.name}</Text>
                <Text style={styles.userRole}>{details.foundBy.role}</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          {item.status === 'Found' && (
            <>
              <TouchableOpacity style={styles.claimButton} onPress={handleClaimItem}>
                <Text style={styles.claimButtonText}>Claim Item</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.contactButton} onPress={handleContact}>
                <Text style={styles.contactButtonText}>Contact Finder</Text>
              </TouchableOpacity>
            </>
          )}

          {item.status === 'Lost' && (
            <TouchableOpacity style={styles.contactButton} onPress={handleContact}>
              <Text style={styles.contactButtonText}>Contact Owner</Text>
            </TouchableOpacity>
          )}
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
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  itemIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemHeaderInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 6,
    fontFamily: 'Inter_700Bold',
  },
  itemMeta: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#9CA3AF',
  },
  foundTextBold: {
    color: '#10B981',
    fontFamily: 'Inter_600SemiBold',
  },
  lostTextBold: {
    color: '#EC4899',
    fontFamily: 'Inter_600SemiBold',
  },
  description: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 24,
    fontFamily: 'Inter_400Regular',
  },
  detailsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
    fontFamily: 'Inter_600SemiBold',
  },
  detailsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  detailItem: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 12,
  },
  detailLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 4,
    fontFamily: 'Inter_500Medium',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    fontFamily: 'Inter_600SemiBold',
  },
  postedBySection: {
    marginBottom: 24,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 12,
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
    fontSize: 16,
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
  claimButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  claimButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  contactButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5B4FED',
    marginBottom: 20,
  },
  contactButtonText: {
    color: '#5B4FED',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
});
