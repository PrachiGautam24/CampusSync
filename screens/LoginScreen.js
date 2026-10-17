import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

// Demo user for testing
const DEMO_USER = {
  name: 'Prachi',
  email: 'prachi@mru.edu.in',
  password: 'demo123'
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      // Navigate to dashboard on successful login
      navigation.navigate('Dashboard', { userName: DEMO_USER.name });
    } else {
      Alert.alert('Error', 'Invalid credentials. Use:\nEmail: prachi@mru.edu.in\nPassword: demo123');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo and App Name */}
        <View style={styles.header}>
          <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <Path
              d="M25 10L10 18.75L25 27.5L40 18.75L25 10Z"
              fill="#5B4FED"
            />
            <Path
              d="M12 22V31L25 37.5L38 31V22"
              stroke="#5B4FED"
              strokeWidth="2"
              fill="none"
            />
          </Svg>
          <Text style={styles.appName}>CampusSync</Text>
        </View>

        {/* Welcome Text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.welcomeSubtitle}>Sign in to continue</Text>
        </View>

        {/* Input Fields */}
        <View style={styles.formContainer}>
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
                    <Path d="M3 10C3 10 4.5 7.5 7 6.5" stroke="#5B4FED" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </>
                )}
              </Svg>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Divider */}
          <Text style={styles.divider}>or</Text>

          {/* Create Account Button */}
          <TouchableOpacity 
            style={styles.createAccountButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.createAccountButtonText}>Create an Account</Text>
          </TouchableOpacity>

          {/* University Text */}
          <Text style={styles.universityText}>Only for Manav Rachna University</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5B4FED',
    marginTop: 10,
    fontFamily: 'Inter_700Bold',
  },
  welcomeContainer: {
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 5,
    fontFamily: 'Inter_700Bold',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Inter_400Regular',
  },
  formContainer: {
    flex: 1,
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
  loginButton: {
    backgroundColor: '#5B4FED',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#5B4FED',
    fontSize: 14,
    marginTop: 15,
    fontFamily: 'Inter_400Regular',
  },
  divider: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 20,
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  createAccountButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5B4FED',
  },
  createAccountButtonText: {
    color: '#5B4FED',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  universityText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginTop: 15,
    fontFamily: 'Inter_400Regular',
  },
});
