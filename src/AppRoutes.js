import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ViewInvoices } from './pages/ViewInvoices/ViewInvoices';
import { CreateInvoice } from './pages/CreateInvoice/CreateInvoice';

export const AppRoutes = () => {
    return (

        <Routes>
          <Route exact path="/" element={<ViewInvoices />} />
          <Route exact path="/view-invoices" element={<ViewInvoices />} />
          <Route exact path="/create-invoices" element={<CreateInvoice />} />
          <Route path="*" element={<h4>404 Not found</h4>} />
        </Routes>
    )
}