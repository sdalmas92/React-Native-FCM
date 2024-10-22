import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    // Get FCM token
    const getToken = async () => {
      try {
        const token = await messaging().getToken();
        console.log('FCM Token:', token);
        // You can save this token to your server to send notifications later
      } catch (error) {
        console.log('Error getting FCM token:', error);
      }
    };

    getToken();

    // Optional: Monitor token refresh
    const unsubscribe = messaging().onTokenRefresh((newToken) => {
      console.log('New FCM Token:', newToken);
    });

    return unsubscribe; // Clean up on unmount
  }, []);

  return (
    <View>
      <Text>React Native FCM Token Example</Text>
    </View>
  );
}

export default App;
