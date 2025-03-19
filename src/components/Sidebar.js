import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TbFileInvoice } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";

const SidebarContainer = styled.aside`
  width: 42px;
  height: 100vh;
  padding: 0px 10px;
  backdrop-filter: blur(12px);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2);
  background-color: #2a2a2a;
  color: white;

`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const MenuItem = styled.li`
  cursor: pointer;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
  }

  a.active {
    color: #06b6d4;
  }

  svg {
    font-size: 32px;
    margin-top: 8px;
  }

  p {
    line-height: 0px;
    font-size: 12px;
    text-align: center;
  }
`;

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Menu>
        <MenuItem>
          <NavLink to="/view-invoices" className={({ isActive }) => (isActive ? "active" : "")}>
            <TbFileInvoice />
          </NavLink>
          <p>View</p>
        </MenuItem>
        <MenuItem>
          <NavLink to="/create-invoices" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoCreateOutline />
          </NavLink>
          <p>Create</p>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};
