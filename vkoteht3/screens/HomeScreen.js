import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainAppbar from '../components/MainAppbar';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <MainAppbar title="MD Nav Demo" navigation={navigation} />
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button title="Go to Second Screen" onPress={() => navigation.navigate('SecondScreen')} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
