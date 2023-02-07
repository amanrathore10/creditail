import React, { useContext, useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { UserContext } from './Context/User'
const success_image = require('../../assets/success_icon.png')
function Success({route,navigation}) {
    const {data} = useContext(UserContext)

    const invoice_id = route.params.invoice_id;
    const invoiceDetails = data.find((val)=>(val.id === invoice_id))
    console.log('__final_success',invoiceDetails)
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },5000)
    },[])
  return (
    <View
    style={{flex:1,backgroundColor:"#198748"}}
    >
            <View style={{width:"100%",alignItems:"center",justifyContent:"center",flex:1}}>
                <Image style={{width:100,height:100}} source={success_image}/>
            <Text style={{fontSize:12,color:"#ffffff"}}>{invoiceDetails.id}</Text>

            <Text style={{fontSize:30,color:"#ffffff",padding:10}}>₹{invoiceDetails.amount}</Text>

            <Text style={{fontSize:16,color:"#ffffff",padding:10}}>{invoiceDetails.retailer_name}</Text>

                <Text style={{fontSize:24,color:"#ffffff",letterSpacing:1,borderTopColor:"#ffffff",borderTopWidth: 1,borderStyle:"dashed",padding:20,borderRadius: 1}}>PAID BY {invoiceDetails.payment_mode}</Text>
            </View>
            <Text style={{textAlign:"center",fontSize:12,color:"#ffffff",letterSpacing:1,borderTopColor:"#ffffff",borderTopStyle:"dashed",padding:10}}>Redirecting to home screen...</Text>

    </View>
  )
}

export default Success