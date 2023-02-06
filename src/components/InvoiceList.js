import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import InvoiceItem from './InvoiceItem'

function InvoiceList({invoices,openDetails}) {
  return (
        <View>
            {invoices.map((invoice,index)=>{
                return (<InvoiceItem key={invoice.id+""+index} openDetails={openDetails} invoice={invoice}/>)
            })}
        </View>
  )
}

export default InvoiceList