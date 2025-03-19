import React from 'react';
import styled, { css } from 'styled-components';

const StyledBadge = styled.span`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  ${({ type }) => {
    switch (type) {
      case 'success':
        return css`background-color: #22c55e;`;
      case 'warning':
        return css`background-color: #f59e0b;`;
      case 'alert':
        return css`background-color: #ef4444;`;
      default:
        return css`background-color: #6b7280;`;
    }
  }}
`;

export const Badge = ({ type = 'default', children }) => {
  return <StyledBadge type={type}>{children}</StyledBadge>;
};

