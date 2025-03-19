import React, { useState } from "react";
import { InvoiceAction, InvoiceForm, TotalAmount, Wrapper } from "./style";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { LineItems } from "./components/LineItems";
import { FaPlus, FaRupeeSign } from "react-icons/fa";
import { Alert } from "../../components/Alert";

export const CreateInvoice = () => {
  const [invoiceDetail, setInvoiceDetail] = useState({
    invoiceNumber: "",
    clientName: "",
    taxNumber: "",
    note: "",
    items: [
      {
        item: "Item 1",
        laborCharge: 0,
        materialCost: 0,
        hourlyRate: 0,
        hourWorked: 0,
        workExpense: 0,
      },
    ],
  });

  const [itemsCount, setItemsCount] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e, index = null) => {
    let { value, name } = e.target;

    if (index !== null) {
      let cloneItems = JSON.parse(JSON.stringify(invoiceDetail.items));
      cloneItems[index][name] = value;

      setInvoiceDetail((prev) => ({
        ...prev,
        items: cloneItems,
      }));
    } else {
      setInvoiceDetail((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    setShowAlert(false);
  };

  const handleAddItems = () => {
    let newItem = {
      item: `Item ${itemsCount + 1}`,
      laborCharge: 0,
      materialCost: 0,
      hourlyRate: 0,
      hourWorked: 0,
      workExpense: 0,
    };
    setInvoiceDetail((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
    setItemsCount((prevCount) => prevCount + 1);
  };

  const handleSendInvoice = () => {
    setShowAlert(true);
    setInvoiceDetail({
      invoiceNumber: "",
      clientName: "",
      taxNumber: "",
      note: "",
      items: [
        {
          item: "Item 1",
          laborCharge: 0,
          materialCost: 0,
          hourlyRate: 0,
          hourWorked: 0,
          workExpense: 0,
        },
      ],
    })
  };

  return (
    <Wrapper>
      {showAlert && <Alert
        message={"Invoice has been sent successfuly on customer's email!"}
        type="success"
      />}
      <h2>Create Invoice</h2>
      <hr />
      <InvoiceForm style={{ padding: "4px" }}>
        <InputField
          name="invoiceNumber"
          label="Invoice Number"
          type="text"
          placeholder="eg: IA00001"
          value={invoiceDetail.invoiceNumber}
          onChange={handleInputChange}
          required
        />

        <InputField
          name="clientName"
          label="Client Name"
          type="text"
          placeholder="Enter client name"
          value={invoiceDetail.clientName}
          onChange={handleInputChange}
        />

        <InputField
          name="taxNumber"
          label="Tax Number"
          type="text"
          placeholder="11111111111"
          value={invoiceDetail.taxNumber}
          onChange={handleInputChange}
        />

        <InputField
          name="note"
          label="Note"
          type="textarea"
          placeholder="Short note on how to proceed futher with this invoice"
          value={invoiceDetail.note}
          onChange={handleInputChange}
        />
      </InvoiceForm>

      <LineItems
        items={invoiceDetail.items}
        handleInputChange={handleInputChange}
      />

      <Button variant="primary" onClick={handleAddItems}>
        <FaPlus /> Add
      </Button>

      <InvoiceAction>
        <TotalAmount>
          <FaRupeeSign size={14} /> 18,50,000
        </TotalAmount>
        <Button variant="secondary">Cancel</Button>&nbsp;
        <Button variant="primary" onClick={handleSendInvoice}>
          Send Invoice
        </Button>
      </InvoiceAction>
    </Wrapper>
  );
};
