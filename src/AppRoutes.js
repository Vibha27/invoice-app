import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { InvoiceApp } from './pages/invoiceApp/InvoiceApp';

export const AppRoutes = () => {
    return (

        <Routes>
          <Route exact path="/" element={<InvoiceApp />} />
          <Route path="*" element={<h4>404 Not found</h4>} />
        </Routes>
    )
}