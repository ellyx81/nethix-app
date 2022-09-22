
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Route from  './src/navigations/Navigator';
import V2 from './src/screens/VideoPages/V2';
import V3 from './src/screens/VideoPages/V3';
const App = () => {


  return( 
    <>
      <NavigationContainer>
      <Route />
      </NavigationContainer>
      
    </>
  );
};

export default App;

