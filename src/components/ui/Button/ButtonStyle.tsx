import styled from "styled-components";

export const ButtonMainContainer = styled.button<{
  disabled: boolean;
  bgColor?: string;
  fontWeight?: string;
  fontColor?: string;
  fontSize?: string;
  fontFamily?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background: ${({ bgColor }) => bgColor};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
  font-family: ${({ fontFamily }) => fontFamily};
  border: ${({ borderWidth, borderColor }) => `${borderWidth} solid ${borderColor}`};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 10px 16px;
`;
