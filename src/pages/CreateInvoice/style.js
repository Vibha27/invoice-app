import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  height: calc(100vh - 90px);
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 12px;
  padding: 4px 18px;
`;

const InvoiceForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
`;

const InvoiceAction = styled.div`
    display: flex;
    justify-content: flex-end;

`;

export { Wrapper, InvoiceForm, InvoiceAction };
