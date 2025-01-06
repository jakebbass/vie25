import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ComingSoonScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Coming Soon</Text>
      <Text style={styles.subText}>
        This feature is under development. Stay tuned!
      </Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
        color="#286048"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    color: '#286048',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7F7F7F',
  },
});

export default ComingSoonScreen;
