import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InvoiceList from './InvoiceList'
const invoices = [{"id":"63e14c5ce2d28684d1df65b5","title":"Bulk purchase","description":"Purchase for extra stock","agent_id":"123","supplier_id":"121","amount":"100","payment_mode":"CASH","payment_status":"PENDING","retailer_id":123,"retailer_name":"Agrawal brothers"},
{"id":"63e14c5ce2d28684d1df65b5","title":"Bulk purchase","description":"Purchase for extra stock","agent_id":"123","supplier_id":"121","amount":"100","payment_mode":"CASH","payment_status":"PENDING","retailer_id":123,"retailer_name":"Agrawal brothers"},
{"id":"63e14c5ce2d28684d1df65b5","title":"Bulk purchase","description":"Purchase for extra stock","agent_id":"123","supplier_id":"121","amount":"100","payment_mode":"CASH","payment_status":"PENDING","retailer_id":123,"retailer_name":"Agrawal brothers"},
{"id":"63e14c5ce2d28684d1df65b5","title":"Bulk purchase","description":"Purchase for extra stock","agent_id":"123","supplier_id":"121","amount":"100","payment_mode":"CASH","payment_status":"PENDING","retailer_id":123,"retailer_name":"Agrawal brothers"}]

function Home(props) {

    const openDetails = ({invoice_id})=>{
        props.navigation.navigate('Details',{
            invoice_id,
        })
    }
  return (
    <View style={styles.invoiceList}>
        <InvoiceList invoices={invoices} openDetails={openDetails}/>
    </View>
  )
}

const styles = StyleSheet.create({
    invoiceList:{
        backgroundColor:"#cccccc",
        width:"100%"
    }
})
export default Home