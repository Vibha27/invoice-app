import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  height: calc(100vh - 90px);
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 12px;
  padding: 4px 18px;
`;

export const InvoiceForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
`;

export const InvoiceAction = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #1f1f1f;
  color: #06b6d4;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: rgb(219, 219, 219);
  }
`;

export const TableHeader = styled.th`
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid #333;
`;

export const TableCell = styled.td`
  padding: 14px 16px;
  border-bottom: 1px solid #cecece;
  font-size: 0.95rem;
`;
