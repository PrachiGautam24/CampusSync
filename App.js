import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, View, StyleSheet } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { BookingProvider } from './BookingContext';
import SplashScreen from './screens/SplashScreen';
import RoleSelectionScreen from './screens/RoleSelectionScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import DashboardScreen from './screens/DashboardScreen';
import TeacherDashboardScreen from './screens/TeacherDashboardScreen';
import RoomFinderScreen from './screens/RoomFinderScreen';
import AvailableRoomsScreen from './screens/AvailableRoomsScreen';
import RoomDetailsScreen from './screens/RoomDetailsScreen';
import ConfirmBookingScreen from './screens/ConfirmBookingScreen';
import ActivityLookupScreen from './screens/ActivityLookupScreen';
import ActivityDetailsScreen from './screens/ActivityDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import HelpHubScreen from './screens/HelpHubScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';
import MyTasksScreen from './screens/MyTasksScreen';
import LostAndFoundScreen from './screens/LostAndFoundScreen';
import ReportItemScreen from './screens/ReportItemScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <BookingProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="TeacherDashboard" component={TeacherDashboardScreen} />
          <Stack.Screen name="RoomFinder" component={RoomFinderScreen} />
          <Stack.Screen name="AvailableRooms" component={AvailableRoomsScreen} />
          <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} />
          <Stack.Screen name="ConfirmBooking" component={ConfirmBookingScreen} />
          <Stack.Screen name="ActivityLookup" component={ActivityLookupScreen} />
          <Stack.Screen name="ActivityDetails" component={ActivityDetailsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="HelpHub" component={HelpHubScreen} />
          <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
          <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
          <Stack.Screen name="MyTasks" component={MyTasksScreen} />
          <Stack.Screen name="LostAndFound" component={LostAndFoundScreen} />
          <Stack.Screen name="ReportItem" component={ReportItemScreen} />
          <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
          <Stack.Screen name="MyProfile" component={MyProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookingProvider>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (Platform.OS === 'web') {
    return (
      <View style={styles.webContainer}>
        <View style={styles.phoneFrame}>
          <AppNavigator />
        </View>
      </View>
    );
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  webContainer: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  phoneFrame: {
    width: 390,
    height: 844,
    maxHeight: '95vh',
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
  },
});
