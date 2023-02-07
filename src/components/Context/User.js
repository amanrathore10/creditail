
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

const UserContext = React.createContext();
const test_invoices = [{"id":"63e14c5ce2","title":"First purchase","description":"Purchase for extra stock","agent_id":"123","supplier_id":"121","amount":"1000","payment_mode":null,"payment_status":"PENDING","retailer_id":123,"retailer_name":"Agrawal brothers"},
{"id":"73e14c5ce","title":"Second purchase","description":"Purchase for extra stock","agent_id":"123","supplier_id":"121","amount":"25000","payment_mode":null,"payment_status":"PENDING","retailer_id":123,"retailer_name":"Hardware Supplier"},
{"id":"83e14c5ce","title":"Third purchase","description":"Purchase for extra stock","agent_id":"123","supplier_id":"121","amount":"32000","payment_mode":null,"payment_status":"PENDING","retailer_id":123,"retailer_name":"Food Supplier"},
{"id":"93e14c5ce","title":"Fourth purchase","description":"Purchase for extra stock","agent_id":"123","supplier_id":"121","amount":"15000","payment_mode":null,"payment_status":"PENDING","retailer_id":123,"retailer_name":"Kapoor and sons"}]


const UserProvider = ({children})=>{
    const [invoices,setInvoices] = useState(null);
    const [loading,setLoading] = useState(true);
    const updateInvoice = (invoice_data)=>{
        let inv = []
        invoices.forEach(element => {
            if(element.id === invoice_data.id){
                inv.push(invoice_data)
            }else{
                inv.push(element)
            }
        });
        setInvoices(inv)
    }
    useEffect(()=>{
        setInvoices(test_invoices)
        setLoading(false);
    },[])
    return (
        <UserContext.Provider value={{loading,data:invoices,updateInvoice}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider,UserContext};