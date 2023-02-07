import { StyleSheet, Text, Touchable, TouchableHighlight, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import InvoiceDetails from './src/components/InvoiceDetails';
import Success from './src/components/Success';
import { Ionicons } from '@expo/vector-icons'; 
import { UserContext, UserProvider } from './src/components/Context/User';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={({ navigation }) => ({
            title: 'Invoices',
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          })}
          component={Home} />
          <Stack.Screen name="Details" 
            options={({ route,navigation }) => ({
              title: 'Details',
              headerStyle: styles.headerStyle,
              headerTitleStyle: styles.headerTitleStyle,
              headerBackVisible:false,
              headerTitle: (props) => <LogoTitle {...props} route={route} />,
              headerLeft:()=>{
              return <TouchableHighlight style={{marginRight:20}} onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={24} color="#ffffff"/></TouchableHighlight>}

            })}
            
          component={InvoiceDetails}
          />
          <Stack.Screen name="Success" 
            options={{
              title: 'Success',
              headerStyle: styles.headerStyle,
              headerTitleStyle: styles.headerTitleStyle,
              headerShown:false
            }}
          component={Success} />
        </Stack.Navigator>
        </UserProvider>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#222222',
    opacity:1,
    color:"#ffffff"
  },
  headerTitleStyle:{
    color:"#ffffff"
  },

});


const LogoTitle = ({route,navigation})=>{
  const {data} = React.useContext(UserContext)
  const invoice_id = route.params.invoice_id;
  const invoiceDetails = data.find((val)=>(val.id === invoice_id))
  return (
    <View>
        <Text style={{color:"#ffffff",fontWeight:"bold",fontSize:20}}>{invoiceDetails.retailer_name}</Text>
        <Text style={{color:"#ffffff"}}>{invoiceDetails.id}</Text>
    </View>
  )
}