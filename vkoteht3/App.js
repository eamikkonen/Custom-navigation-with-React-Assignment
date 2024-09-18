import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './screens/login';


export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}