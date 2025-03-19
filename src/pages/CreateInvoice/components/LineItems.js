import React from "react";
import InputField from "../../../components/InputField";
import {
  StyledTable,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
  TableCell,
} from "../style";
import { FaTrash } from "react-icons/fa";

export const LineItems = ({ items = [], handleInputChange }) => {
  return (
    <>
      <TableWrapper>
        <StyledTable>
          <TableHead>
            <TableHeader>Item</TableHeader>
            <TableHeader>Labour Charge</TableHeader>
            <TableHeader>Material Cost</TableHeader>
            <TableHeader>Work Expense</TableHeader>
            <TableHeader>Hour Rate</TableHeader>
            <TableHeader>Hour Worked</TableHeader>
            <TableHeader>Delete</TableHeader>
          </TableHead>
          <tbody>
            {items.length > 0 &&
              items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.item || ""}</TableCell>
                  <TableCell>
                    <InputField
                      name="laborCharge"
                      type="text"
                      placeholder="eg: IA00001"
                      value={item.laborCharge}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </TableCell>
                  <TableCell>
                    <InputField
                      name="materialCost"
                      type="text"
                      placeholder="eg: IA00001"
                      value={item.materialCost}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </TableCell>
                  <TableCell>
                    <InputField
                      type="text"
                      name="workExpense"
                      placeholder="eg: IA00001"
                      value={item.workExpense}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </TableCell>
                  <TableCell>
                    <InputField
                      type="text"
                      name="hourlyRate"
                      placeholder="eg: IA00001"
                      value={item.hourlyRate}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </TableCell>
                  <TableCell>
                    <InputField
                      type="text"
                      name="hourWorked"
                      placeholder="eg: IA00001"
                      value={item.hourWorked}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </TableCell>
                  <TableCell>
                    <FaTrash />
                  </TableCell>
                </TableRow>
              ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </>
  );
};
