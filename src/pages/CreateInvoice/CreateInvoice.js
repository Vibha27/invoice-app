import React, { useState } from "react";
import { InvoiceAction, InvoiceForm, Wrapper } from "./style";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export const CreateInvoice = () => {
  const [invoiceDetail, setInvoiceDetail] = useState({
    invoiceNumber: "",
    clientName: "",
    taxNumber: "",
    note: "",
    items: [
        {
            laborCharge: 0,
            materialCost: 0,
            hourlyRate: 0,
            hourWorked: 0,
            workExpense: 0
        }
    ]
  });

  const handleInputChange = () => {
    return
  }

  return (
    <Wrapper>
      <h2>Create Invoice</h2>
      <hr />
      <InvoiceForm style={{ padding: "20px" }}>
        <InputField
          label="Invoice Number"
          type="text"
          placeholder="eg: IA00001"
          value={invoiceDetail.invoiceNumber}
          onChange={(e) => handleInputChange(e.target.value)}
          required
        />

        <InputField
          label="Client"
          type="text"
          placeholder="Enter client name"
          value={invoiceDetail.clientName}
          onChange={(e) => handleInputChange(e.target.value)}
        />

        <InputField
          label="Tax Number"
          type="text"
          placeholder="11111111111"
          value={invoiceDetail.taxNumber}
          onChange={(e) => handleInputChange(e.target.value)}
        />

        <InputField
          label="Note"
          type="textarea"
          placeholder="Short note on how to proceed futher with this invoice"
          value={invoiceDetail.note}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </InvoiceForm>
      <InvoiceAction>
        <Button variant="secondary">Cancel</Button>&nbsp;
        <Button variant="primary">Save Invoice</Button>
      </InvoiceAction>
    </Wrapper>
  );
};
