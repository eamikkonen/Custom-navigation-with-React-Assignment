import React from 'react';
import { Appbar } from 'react-native-paper';

const MainAppbar = ({ navigation, back, title }) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default MainAppbar;
