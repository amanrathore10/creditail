import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
const success_image = require('../../assets/success_icon.png')
function Success({navigation}) {
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
            <Text style={{fontSize:12,color:"#ffffff"}}>12312312</Text>

            <Text style={{fontSize:30,color:"#ffffff",padding:10}}>₹500</Text>

            <Text style={{fontSize:16,color:"#ffffff",padding:10}}>Agrawal brothers and sons</Text>

                <Text style={{fontSize:24,color:"#ffffff",letterSpacing:1,borderTopColor:"#ffffff",borderTopWidth: 1,borderStyle:"dashed",padding:20,borderRadius: 1}}>PAID BY CASH</Text>
            </View>
            <Text style={{textAlign:"center",fontSize:12,color:"#ffffff",letterSpacing:1,borderTopColor:"#ffffff",borderTopStyle:"dashed",padding:10}}>Redirecting to Home...</Text>

    </View>
  )
}

export default Success