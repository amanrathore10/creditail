import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { UserContext } from './Context/User';
import InvoiceList from './InvoiceList'

function Home(props) {
    const {loading,data} = useContext(UserContext);
    const openDetails = ({invoice_id})=>{
        props.navigation.navigate('Details',{
            invoice_id,
        })
    }
    if(loading){
        return (
            <Text>Loading...</Text>
        )
    }else{
        return (
            <View style={styles.invoiceList}>
                <InvoiceList invoices={data} openDetails={openDetails}/>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    invoiceList:{
        backgroundColor:"#cccccc",
        width:"100%"
    }
})
export default Home