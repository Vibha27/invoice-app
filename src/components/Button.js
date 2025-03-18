import React from 'react';
import styled, { css } from 'styled-components';

// Base button style
const StyledButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: none;
  color: #fff;

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: #121212;
      &:hover {
        background-color:rgb(30, 29, 29);
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: #64748b;
      &:hover {
        background-color: #475569;
      }
    `}
  
  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
      color: #666;
    `}
`;

const Button = ({ children, variant = 'primary', onClick, disabled, ...rest }) => {
  return (
    <StyledButton variant={variant} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
