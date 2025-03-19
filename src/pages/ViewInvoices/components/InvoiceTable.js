import React from "react";
import {
  StyledTable,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../CreateInvoice/style";
import { Badge } from "../../../components/Badge";

export const InvoiceTable = ({ invoices = [] }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
        <TableHeader>Invoice Number</TableHeader>
        <TableHeader>Invoice Date</TableHeader>
          <TableHeader>Client Name</TableHeader>
          <TableHeader>Total</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableHead>
        <tbody>
          {invoices.length > 0 &&
            invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell>{invoice.invoiceNumber || ""}</TableCell>
                <TableCell>{invoice.invoiceDate || ""}</TableCell>
                <TableCell>{invoice.clientName || ""}</TableCell>
                <TableCell>{invoice.total || ""}</TableCell>
                <TableCell>
                  {invoice.status === "paid" ? (
                    <Badge type="success">{invoice.status}</Badge>
                  ) : invoice.status === "outstanding" ? (
                    <Badge type="warning">{invoice.status}</Badge>
                  ) : (
                    <Badge type="alert">{invoice.status}</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};
