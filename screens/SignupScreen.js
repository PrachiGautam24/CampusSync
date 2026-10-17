import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export default function SignupScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!email.includes('@') || !email.includes('.edu')) {
      Alert.alert('Error', 'Please use a valid college email ID');
      return;
    }

    // Navigate to verify email screen
    navigation.navigate('VerifyEmail', { email });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Use your college email to register</Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Full Name */}
          <View style={styles.inputContainer}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles.inputIcon}>
              <Circle cx="10" cy="7" r="3" stroke="#5B4FED" strokeWidth="1.5" fill="none"/>
              <Path d="M4 17C4 14.2386 6.23858 12 9 12H11C13.7614 12 16 14.2386 16 17" stroke="#5B4FED" strokeWidth="1.5" strokeLinecap="round"/>
            </Svg>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#999"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* College Email */}
          <View style={styles.inputContainer}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles.inputIcon}>
              <Rect x="3" y="5" width="14" height="11" rx="1" stroke="#5B4FED" strokeWidth="1.5" fill="none"/>
              <Path d="M3 7L10 11L17 7" stroke="#5B4FED" strokeWidth="1.5" strokeLinecap="round"/>
            </Svg>
            <TextInput
              style={styles.input}
              placeholder="College Email ID"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles.inputIcon}>
              <Rect x="4" y="9" width="12" height="8" rx="1" stroke="#5B4FED" strokeWidth="1.5" fill="none"/>
              <Path d="M7 9V6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6V9" stroke="#5B4FED" strokeWidth="1.5"/>
              <Circle cx="10" cy="13" r="1" fill="#5B4FED"/>
            </Svg>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {showPassword ? (
                  <>
                    <Path d="M10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z" stroke="#5B4FED" strokeWidth="1.5" fill="none"/>
                    <Path d="M3 10C3 10 6 5 10 5C14 5 17 10 17 10C17 10 14 15 10 15C6 15 3 10 3 10Z" stroke="#5B4FED" strokeWidth="1.5" fill="none"/>
                  </>
                ) : (
                  <>
                    <Path d="M3 3L17 17" stroke="#5B4FED" strokeWidth="1.5" strokeLinecap="round"/>
                    <Path d="M10 7C8.34315 7 7 8.34315 7 10C7 10.3506 7.06015 10.6872 7.17071 11" stroke="#5B4FED" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </>
                )}
              </Svg>
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles.inputIcon}>
              <Rect x="4" y="9" width="12" height="8" rx="1" stroke="#5B4FED" strokeWidth="1.5" fill="none"/>
              <Path d="M7 9V6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6V9" stroke="#5B4FED" strokeWidth="1.5"/>
              <Circle cx="10" cy="13" r="1" fill="#5B4FED"/>
            </Svg>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {showConfirmPassword ? (
                  <>
                    <Path d="M10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z" stroke="#5B4FED" strokeWidth="1.5" fill="none"/>
                    <Path d="M3 10C3 10 6 5 10 5C14 5 17 10 17 10C17 10 14 15 10 15C6 15 3 10 3 10Z" stroke="#5B4FED" strokeWidth="1.5" fill="none"/>
                  </>
                ) : (
                  <>
                    <Path d="M3 3L17 17" stroke="#5B4FED" strokeWidth="1.5" strokeLinecap="round"/>
                    <Path d="M10 7C8.34315 7 7 8.34315 7 10C7 10.3506 7.06015 10.6872 7.17071 11" stroke="#5B4FED" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </>
                )}
              </Svg>
            </TouchableOpacity>
          </View>

          {/* Select Role */}
          <View style={styles.roleContainer}>
            <Text style={styles.roleLabel}>Select Role</Text>
            <View style={styles.roleButtons}>
              {['Student', 'Teacher', 'Admin'].map((role) => (
                <TouchableOpacity
                  key={role}
                  style={[
                    styles.roleButton,
                    selectedRole === role && styles.roleButtonActive
                  ]}
                  onPress={() => setSelectedRole(role)}
                >
                  <Text style={[
                    styles.roleButtonText,
                    selectedRole === role && styles.roleButtonTextActive
                  ]}>
                    {role}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Register Button */}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
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
  scrollView: {
    flex: 1,
  },
  backButton: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  backArrow: {
    fontSize: 28,
    color: '#5B4FED',
  },
  header: {
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 5,
    fontFamily: 'Inter_700Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Inter_400Regular',
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1A1A1A',
    fontFamily: 'Inter_400Regular',
    outlineStyle: 'none',
  },
  roleContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  roleLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 15,
    fontFamily: 'Inter_600SemiBold',
  },
  roleButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'center',
  },
  roleButtonActive: {
    backgroundColor: '#5B4FED',
    borderColor: '#5B4FED',
  },
  roleButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  roleButtonTextActive: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  registerButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Inter_400Regular',
  },
  loginLink: {
    fontSize: 14,
    color: '#5B4FED',
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
});
