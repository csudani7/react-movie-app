//#Global Imports
import styled from "styled-components";

//#Local Imports
import { theme } from "../../Theme/theme";

export const HomeMainContainer = styled.div<{
  length: number;
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ length }) => (length > 0 ? "center" : "flex-start")};
  gap: 26px;
  width: 100%;
`;

export const Row = styled.div<{
  length: number;
  NO_OF_COLUMNS: number;
  CARD_GAP_VALUE: number;
}>`
  display: flex;
  justify-content: ${({ length, NO_OF_COLUMNS }) =>
    length < NO_OF_COLUMNS ? "flex-start" : "space-between"};
  align-items: center;
  gap: ${({ length, NO_OF_COLUMNS, CARD_GAP_VALUE }) =>
    length < NO_OF_COLUMNS && `${CARD_GAP_VALUE}px`};
  width: 100%;
`;

export const NoResultTextWrappr = styled.div`
  font-family: ${theme.typography.openSansFont};
  color: ${theme.colors.white100};
`;
