import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatScreen from '../screens/ChatScreen';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ChatScreen />
    </SafeAreaProvider>
  );
};

export default App;
