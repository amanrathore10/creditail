import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import InvoiceDetails from './src/components/InvoiceDetails';
import Success from './src/components/Success';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{
          title: 'Invoices',
          headerStyle: {
            backgroundColor: '#222222',
            opacity:1,
            color:"#ffffff"
          },
          headerTitleStyle: {
            color:"#ffffff"
          },
        }}
        component={Home} />
        <Stack.Screen name="Details" 
          options={{
            title: 'Details',
            headerStyle: {
              backgroundColor: '#222222',
              opacity:1,
              color:"#ffffff"
            },
            headerTitleStyle: {
              color:"#ffffff"
            },
          }}
        component={InvoiceDetails} />
        <Stack.Screen name="Success" 
          options={{
            title: 'Success',
            headerStyle: {
              backgroundColor: '#222222',
              opacity:1,
              color:"#ffffff"
            },
            headerTitleStyle: {
              color:"#ffffff"
            },
            headerShown:false
          }}
        component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
