import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TbFileInvoice } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";

const SidebarContainer = styled.aside`
  width: 25px;
  height: 100vh;
  padding: 0px 20px;
  background: rgba(255, 255, 255, 0.4); /* Transparent white */
  backdrop-filter: blur(12px);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2); /* 3D Shadow */
  color: #121212;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const MenuItem = styled.li`
//   padding: 0.8rem;
  cursor: pointer;
//   &:hover {
//     background: #2c3e50;
//   }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }
  svg {
    font-size: 32px;
    margin-top: 8px;
  }
`;

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Menu>
        <MenuItem>
          <Link to={"/view-invoices"}>
            <TbFileInvoice />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/create-invoices"}>
            <IoCreateOutline />
          </Link>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};
