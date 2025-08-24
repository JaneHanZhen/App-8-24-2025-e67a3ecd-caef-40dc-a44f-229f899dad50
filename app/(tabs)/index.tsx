import { StyleSheet, Text, View, SafeAreaView, Animated, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';

const Friend = () => {
  // Animation values for friend card
  const friendFadeAnim = useRef(new Animated.Value(0)).current;
  const friendScaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    // Start animations with a slight delay for staggered effect
    Animated.parallel([
      Animated.timing(friendFadeAnim, {
        toValue: 1,
        duration: 1000,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.spring(friendScaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        delay: 300,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <Animated.View 
      style={[
        styles.friendCard,
        {
          opacity: friendFadeAnim,
          transform: [{ scale: friendScaleAnim }]
        }
      ]}
    >
      <View style={styles.friendHeader}>
        <View style={styles.profileImageContainer}>
          {/* Placeholder for profile image */}
          <View style={styles.profileImage}>
            <Text style={styles.profileInitial}>A</Text>
          </View>
        </View>
        <View style={styles.friendInfo}>
          <Text style={styles.friendName}>Alex Johnson</Text>
          <Text style={styles.friendStatus}>Online</Text>
        </View>
      </View>
      <View style={styles.friendDivider} />
      <Text style={styles.friendBio}>
        Software developer, hiking enthusiast, and coffee lover. Always up for a new adventure!
      </Text>
    </Animated.View>
  );
};

export default function HomeScreen() {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    // Start animations when component mounts
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Animated.View 
          style={[
            styles.card,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }]
            }
          ]}
        >
          <Text style={styles.heading}>Hello World!</Text>
          <Text style={styles.subText}>Welcome to my first React Native app</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>
            This is a simple example of a React Native application using Expo Router.
          </Text>
        </Animated.View>
        
        {/* Friend component */}
        <Friend />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 24, // Add spacing between cards
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 32,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3f51b5',
    marginBottom: 12,
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: '#546e7a',
    textAlign: 'center',
    marginBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '80%',
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: '#78909c',
    textAlign: 'center',
    lineHeight: 24,
  },
  
  // Friend card styles
  friendCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  friendHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImageContainer: {
    marginRight: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3f51b5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  friendStatus: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  friendDivider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginBottom: 16,
  },
  friendBio: {
    fontSize: 14,
    color: '#78909c',
    lineHeight: 20,
  }
});