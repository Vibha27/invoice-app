import React from 'react';
import { InvoiceTable } from './components/InvoiceTable';
import { InvoiceData } from './invoiceData';
import { Wrapper } from '../CreateInvoice/style';

export const ViewInvoices = () => {
    return <Wrapper>
        <h2>View Invoices</h2>
        <hr />
        <InvoiceTable invoices={InvoiceData}/>
    </Wrapper>
}