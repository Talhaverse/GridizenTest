import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const Welcome = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [interests, setInterests] = useState('');

  const handleFirstNameChange = text => {
    setFirstName(text);
  };

  const handleLastNameChange = text => {
    setLastName(text);
  };

  const handleInterestsChange = text => {
    setInterests(text);
  };

  const handleSubmit = async () => {
    if (firstName === '' || lastName === '' || interests === '') {
      Alert.alert('All fields are required!');
      console.log('all fields are mandatory');
    } else {
      navigation.navigate('homescreen');
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Interests:', interests);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={handleFirstNameChange}
      />

      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={handleLastNameChange}
      />

      <Text style={styles.label}>Interests:</Text>
      <TextInput
        style={styles.input}
        value={interests}
        onChangeText={handleInterestsChange}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    padding: 30,
    backgroundColor: '#442445',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
    color: 'white',
  },
});

export default Welcome;
