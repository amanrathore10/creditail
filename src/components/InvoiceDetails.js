import React, { useState } from 'react'
import { Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'

function InvoiceDetails({navigation}) {
    const [amount,setAmount] = useState("");
    const [paymentMode,setPaymentMode] = useState("");
    const handleInput = (text)=>{
        console.log(text);
        if(parseInt(text)|| text === ""){
            setAmount(text)
        }
    }
    const redirectToSuccess = ()=>{
        navigation.navigate('Success',{
            invoice_id: 123
        })
    }
    const selectPaymentMode = (mode)=>{
        setPaymentMode(mode)
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>

        <View style={{marginBottom:20,backgroundColor:"#444444",padding:30,width:"100%",borderBottomLeftRadius:10,borderBottomRightRadius:10,paddingTop:20}}>  
            <View style={{width:"100%"}}>  
                <Text style={{fontSize:10,color:"#ffffff",marginBottom:10}}>Amount</Text>
                <TextInput placeholder='₹' defaultValue={amount} value={amount} onChangeText={handleInput} inputMode='numeric' style={{backgroundColor:"#222222",color:"#ffffff",borderRadius:5,fontSize:20,padding:10}}></TextInput>
            </View>
        </View>

        <View><Text style={{fontSize:20,color:"#333333",fontWeight:"bold",marginBottom:20}}>Choose payment mode</Text></View>
        <View style={{flexDirection:"row"}}>
            {payment_options.map((option,i)=>{
                return(
                    <PaymentOption selectPaymentMode={selectPaymentMode} paymentMode={paymentMode} key={i} data={option}></PaymentOption>
                )
            })}
        </View>
        <TouchableHighlight disabled={!paymentMode.length>0} onPress={redirectToSuccess} style={{width:"100%",opacity:paymentMode.length>0?1:0.5}}>
            <View>
                <Text style={{textAlign:"center",width:"100%",backgroundColor:"#7777ff",color:"#ffffff",padding:15,fontSize:20,fontWeight:"bold"}}>Confirm</Text>
            </View>
        </TouchableHighlight>
    </View>
  )
}
const payment_options = ["Cash","Online","Cheque"]
const PaymentOption = ({data,paymentMode,selectPaymentMode})=>{
    const selected = paymentMode === data;
    console.log(paymentMode,data)
    return (
        <TouchableOpacity onPress={()=>{selectPaymentMode(data)}}>

        <View style={{borderColor:"blue",borderWidth:selected?1:0,alignItems:"center",justifyContent:"center", margin:5,padding:10,backgroundColor:selected?"#dfe8f4":"#dddddd",borderRadius:10,width:100,height:150}}>
            <Text>{data}</Text>
        </View>
        </TouchableOpacity>
    )
}
export default InvoiceDetails