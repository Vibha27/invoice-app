import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";    

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;
  background-color: #121212;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Sherlock AI</Logo>
      <Nav>
      </Nav>
      <Profile>
        <span><FaUser /> Vibha</span>
      </Profile>
    </HeaderContainer>
  );
};
