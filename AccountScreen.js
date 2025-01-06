import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Settings</Text>
      <Text style={styles.placeholder}>This is where account settings will go.</Text>
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
    marginBottom: 20,
    color: '#286048',
  },
  placeholder: {
    fontSize: 16,
    color: '#7F7F7F',
  },
});

export default AccountScreen;
