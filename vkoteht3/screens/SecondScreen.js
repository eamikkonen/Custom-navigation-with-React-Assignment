import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainAppbar from '../components/MainAppbar';

const SecondScreen = ({ navigation }) => {
  return (
    <>
      <MainAppbar title="MD Nav Demo" navigation={navigation} back={true} />
      <View style={styles.container}>
        <Text>SecondScreen</Text>
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

export default SecondScreen;
