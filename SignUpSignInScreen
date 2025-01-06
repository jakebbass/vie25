import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const SignUpSignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const isButtonActive = email.length > 0;

  const handleEmailSignUp = () => {
    // Add email sign-up logic (e.g., send confirmation email)
    alert('Confirmation email sent!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up or Sign In</Text>
      <TouchableOpacity style={styles.oauthButton}>
        <Text>Sign up with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.oauthButton}>
        <Text>Sign up with Meta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.oauthButton}>
        <Text>Sign up with Google</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity
        style={[
          styles.submitButton,
          { backgroundColor: isButtonActive ? '#006246' : '#C4C4C4' },
        ]}
        onPress={handleEmailSignUp}
        disabled={!isButtonActive}
      >
        <Text style={styles.submitText}>Sign Up with Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  oauthButton: {
    backgroundColor: '#36FF45',
    padding: 15,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderRadius: 5,
  },
  submitButton: {
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  submitText: {
    color: '#FFF',
  },
});

export default SignUpSignInScreen;
