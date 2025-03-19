import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const AlertWrapper = styled.div`
  padding: 16px 20px;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  margin: 16px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  ${({ type }) => {
    switch (type) {
      case "success":
        return css`
          background-color: #22c55e;
        `; // Green
      case "warning":
        return css`
          background-color: #f59e0b;
        `; // Orange
      case "error":
        return css`
          background-color: #ef4444;
        `; // Red
      default:
        return css`
          background-color: #6b7280;
        `; // Gray
    }
  }}
`;

export const Alert = ({
  type = "default",
  message,
  duration = 3000
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return isVisible ? (
    <AlertWrapper type={type} isVisible={isVisible}>
      {message}
    </AlertWrapper>
  ) : null;
};
