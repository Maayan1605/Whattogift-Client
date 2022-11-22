import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator, AccountStack } from './src/navigation';


export default function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <NavigationContainer>
      {
        isLogin ? (<TabsNavigator />) : (<AccountStack />)
      }
    </NavigationContainer>
  );
}