import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

function InvoiceItem({invoice,openDetails}) {
    
  return (
    <TouchableHighlight onPress={()=>{openDetails({invoice_id:invoice.id})}}>

    <View style={styles.invoiceWrapper}>
        <View style={styles.invoiceTitle}>
            <Text style={styles.invoice_number}>{invoice.id}</Text>
            <Text style={styles.invoice_amount}>₹{invoice.amount}</Text>
        </View>
        <View style={styles.retailer_name}>
            <Text>
                
                {invoice.retailer_name}
                </Text>
        </View>
    </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    invoiceWrapper:{
        padding:12,
        width:"100%",
        backgroundColor:"#ffffff"
    },
    invoiceTitle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center'
    },
    invoice_number:{
        fontSize:20,
        color:"#666666",
        fontWeight:"bold"
    },
    invoice_amount:{
        fontSize:18,
        color:"#333333",
        fontWeight:"bold"
    },
    retailer_name:{
        fontSize:16,
        color:"#999999",
    },
})
export default InvoiceItem