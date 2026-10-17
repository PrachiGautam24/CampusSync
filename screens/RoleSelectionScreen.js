import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export default function RoleSelectionScreen({ navigation }) {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'student',
      name: 'Student',
      description: 'Access classes, events, rooms and more',
      icon: 'bell',
      color: '#E8E5FF',
    },
    {
      id: 'teacher',
      name: 'Teacher',
      description: 'Manage tasks, events, and campus resources',
      icon: 'monitor',
      color: '#E8E5FF',
    },
    {
      id: 'admin',
      name: 'Admin',
      description: 'Manage users, data and system settings',
      icon: 'users',
      color: '#E5F5F8',
    },
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    // Navigate to login after a short delay
    setTimeout(() => {
      navigation.navigate('Login', { role: roleId });
    }, 300);
  };

  const renderIcon = (iconType, color) => {
    switch (iconType) {
      case 'bell':
        return (
          <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <Path
              d="M21 19H7C7 19 7 11.5 14 11.5C21 11.5 21 19 21 19Z"
              stroke="#6B5FED"
              strokeWidth="2"
              fill="none"
            />
            <Path
              d="M14 8V11.5"
              stroke="#6B5FED"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Path
              d="M12 19C12 20.1046 12.8954 21 14 21C15.1046 21 16 20.1046 16 19"
              stroke="#6B5FED"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
        );
      case 'monitor':
        return (
          <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <Rect
              x="6"
              y="7"
              width="16"
              height="11"
              rx="1"
              stroke="#6B5FED"
              strokeWidth="2"
              fill="none"
            />
            <Path
              d="M10 21H18"
              stroke="#6B5FED"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Path
              d="M14 18V21"
              stroke="#6B5FED"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
        );
      case 'users':
        return (
          <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <Path
              d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
              stroke="#5BBFCD"
              strokeWidth="2"
              fill="none"
            />
            <Path
              d="M6 21C6 17.6863 8.68629 15 12 15C13.0929 15 14.1175 15.2922 15 15.8027"
              stroke="#5BBFCD"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Path
              d="M17 11C18.1046 11 19 10.1046 19 9C19 7.89543 18.1046 7 17 7"
              stroke="#5BBFCD"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Path
              d="M22 21C22 18.7909 20.2091 17 18 17C17.6588 17 17.3267 17.0384 17.0082 17.1107"
              stroke="#5BBFCD"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Select Your Role</Text>
        <Text style={styles.subtitle}>Choose how you want to use CampusSync</Text>
      </View>

      {/* Role Cards */}
      <View style={styles.rolesContainer}>
        {roles.map((role) => (
          <TouchableOpacity
            key={role.id}
            style={[
              styles.roleCard,
              selectedRole === role.id && styles.roleCardSelected,
            ]}
            onPress={() => handleRoleSelect(role.id)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconContainer, { backgroundColor: role.color }]}>
              {renderIcon(role.icon, role.color)}
            </View>
            
            <View style={styles.roleInfo}>
              <Text style={styles.roleName}>{role.name}</Text>
              <Text style={styles.roleDescription}>{role.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 28,
    color: '#5B4FED',
  },
  header: {
    marginBottom: 35,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    fontFamily: 'Inter',
  },
  rolesContainer: {
    gap: 16,
  },
  roleCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  roleCardSelected: {
    borderColor: '#5B4FED',
    backgroundColor: '#F9F8FF',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  roleInfo: {
    flex: 1,
  },
  roleName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    fontFamily: 'Inter',
  },
  roleDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
    fontFamily: 'Inter',
  },
});
