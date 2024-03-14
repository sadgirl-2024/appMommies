import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../component/Header';

const Page1 = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    // Handle submission here, you can access the text using the 'text' state
    console.log('Submitted text:', text);
    // You can perform further actions here, such as sending the text to a server or displaying it
  };

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={[styles.title, { color: '#B2818C' }]}>Welcome, how can I help you?</Text>

          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Type your message here"
          />
          <Button title="Submit" onPress={handleSubmit} color="#A54A64" style={{ marginBottom: 20 }} />

         
        </View>
         <Button title="Logout" onPress={handleLogout} color="#A54A64" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '65%', // Set width to 65%
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Page1;
