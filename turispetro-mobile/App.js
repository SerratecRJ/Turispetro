import React from 'react';
import Routes from './src/routes'
import AppProvider from './src/hooks'
import { NavigationContainer} from '@react-navigation/native'


const App = () => {
  return (

    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  
  )}

export default App;