import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentsRecordsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payments and Records</Text>
      <Button
        title="Start Capital Account Application"
        onPress={() => navigation.navigate('ComingSoon')}
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
    marginBottom: 20,
    color: '#286048',
  },
});

export default PaymentsRecordsScreen;
