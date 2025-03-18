import React from "react";
import styled, { css } from "styled-components";

// Wrapper for the whole input
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

// Label Styling
const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

// Base Input Style
const inputStyles = css`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #121212; /* Cyan focus */
  }

  &::placeholder {
    color: #999;
  }
`;

// Styled input
const StyledInput = styled.input`
  ${inputStyles}
`;

// Styled textarea
const StyledTextarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 100px;
`;

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  ...rest
}) => {
  return (
    <InputWrapper>
      {label && (
        <Label>
          {label}
          {required && " *"}
        </Label>
      )}
      {type === "textarea" ? (
        <StyledTextarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          {...rest}
        />
      ) : (
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          {...rest}
        />
      )}
    </InputWrapper>
  );
};

export default InputField;
