import React from "react";
import styled from "styled-components";
import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarContainer = styled.aside`
  width: 25px;
  height: 100vh;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.4);   /* Transparent white */
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
  padding: 0.8rem;
  cursor: pointer;
  &:hover {
    background: #2c3e50;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    color: white;
    text-decoration: none;
  }
  svg {
    font-size: 24px;
  }
`;

export const Sidebar = () => {

  return (
    <SidebarContainer>
      <Menu>
        <MenuItem>
          <Link to={"/invoice"}>
            <FaListUl />
          </Link>
          <Link to={"/create-invoice"}>
            <FaListUl />
          </Link>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

