import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import MainAppbar from '../components/MainAppbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: false, password: false });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);

        setErrors({
            username: username === '',
            password: password === ''
        });
    };

    return (
        <>
          <MainAppbar title="Login" />
          <View style={styles.container}>
            <TextInput
              label="Username"
              value={username}
              onChangeText={setUsername}
              error={submitted && errors.username}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={submitted && errors.password}
              style={styles.input}
              mode="outlined"
            />
            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
              Submit
            </Button>
          </View>
        </>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
      input: {
        marginBottom: 16,
      },
      button: {
        marginTop: 16,
      },
    });
    
    export default Login;